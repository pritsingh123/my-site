import React,{useState} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './navbar.css';
import CloseIcon from '@mui/icons-material/Close';
const Gallary = () => {
    let data = [
        {
            id: 1,
            imgSrc: 'https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg',
        },
        {
            id: 2,
            imgSrc: 'https://www.slazzer.com/static/images/home-page/individual-image-upload.jpg',
        },
        {
            id: 3,
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4gH5NGHUSQc73A5PzMfaGT4gkkQMepN9Cg&usqp=CAU',
        },
        {
            id: 4,
            imgSrc: 'https://www.slazzer.com/static/images/home-page/individual-image-upload.jpg',
        },
        {
            id: 5,
            imgSrc: 'https://www.slazzer.com/static/images/home-page/individual-image-upload.jpg',
        },
        {
            id: 6,
            imgSrc: 'https://www.slazzer.com/static/images/home-page/individual-image-upload.jpg',
        },
        {
            id: 7,
            imgSrc: 'https://www.slazzer.com/static/images/home-page/individual-image-upload.jpg',
        },
        {
            id: 8,
            imgSrc: 'https://www.slazzer.com/static/images/home-page/individual-image-upload.jpg',
        },
        {
            id: 9,
            imgSrc: 'https://www.slazzer.com/static/images/home-page/individual-image-upload.jpg',
        },
        {
            id: 10,
            imgSrc: 'https://www.slazzer.com/static/images/home-page/individual-image-upload.jpg',
        },
        {
            id: 11,
            imgSrc: 'https://www.slazzer.com/static/images/home-page/individual-image-upload.jpg',
        },
        {
            id: 12,
            imgSrc: 'https://www.slazzer.com/static/images/home-page/individual-image-upload.jpg',
        }

    ]
    const [model,setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);

    }
    return (
        <>
        <div className={model?"model open":"model"}>
            <img src={tempImgSrc}></img>
            <CloseIcon onClick={()=>setModel(false)} />
        </div>
        <div className="gallery">
            {data.map((item,index)=>{
                return (
                    <div className="pics" key={index}>
                        <img src={item.imgSrc} style={{width:'100%'}} onClick={() =>getImg(item.imgSrc)}></img>
                    </div>
                )
            })}
        </div>
        </>
    );
}
export default Gallary
