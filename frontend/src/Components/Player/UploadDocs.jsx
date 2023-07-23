import { Button, Input, Spinner } from "@material-tailwind/react";
import React from "react";
import { storage } from "../../firebase";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { toast } from "react-toastify";
import { useUploadDocMutation } from "../../redux/api/userApi";
export default function UploadDocs() {
  const [docUpload, setDocUpload] = React.useState(null);
  const [imgUrl, setImgUrl] = React.useState(null);
  const [docList, setDocList] = React.useState([]);

  const allDocsRef = ref(storage, "player/");

  const uploadDocs = () => {
    console.log("clicked");
    if (docUpload === null) return;

    const docRef = ref(storage, `player/${docUpload.name}`);

    // const upload = await uploadBytes(docRef, docUpload)
    uploadBytesResumable(docRef, docUpload).on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        toast.success("Document uploaded");
        getDownloadURL(docRef).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImgUrl(downloadURL);
        });
      }
    );
  };
  
  const [uploadDoc, { isLoading:isSavingToDb }] = useUploadDocMutation()
  const saveToDB = async()=>{
    try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODk2ODc2NDYsInN1YiI6Im9tQGdtYWlsLmNvbSJ9.YqVjkiBT1B4aBcSO94MrhftytzQY2CN_kml08G-Dnaw'
        const data = {
            user_type: "player",
            user_id: 7,
            document_type: "aadhar",
            document_url: imgUrl,
            token
          }
        const upload = await uploadDoc(data)
        console.log("saving to db...",upload)
        toast.success("Added successfully to db")
    } catch (error) {
        console.log("error while saving docs to db",error)
    }
  }

  // React.useEffect(()=>{
  //     listAll(allDocsRef).then((res)=>{
  //         res.items.forEach((item)=>
  //             getDownloadURL(item).then((url)=>
  //                 setDocList((prev)=>[...prev, url])
  //             )
  //         )
  //     })
  // },[])
  return (
    <div className="w-full h-full flex items-start justify-center">
      <div className="w-1/2">
        <Input type="file" onChange={(e) => setDocUpload(e.target.files[0])} />
        <div className="flex gap-2">
        <Button onClick={uploadDocs}>Upload Image</Button>
        <Button onClick={saveToDB}>{isSavingToDb ? <Spinner/> : 'Save to Db'}</Button>
        </div>

        {/* <div className="border-2 border-solid border-red-500 h-auto">
          {docList.map((url) => (
            <img
              className="h-full w-full rounded-lg my-2"
              src={url}
              alt="nature image"
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}
