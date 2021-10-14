import './photo.css';
import {useState} from 'react';
import {nanoid} from 'nanoid';
import fileToDataUrl from './utility/fileToDataUrl';

export default function Photo() {
	const [photos, setPhotos] = useState([]);

	const handleSelect = async (event) => {
		const files = [...event.target.files];
		const newPhotos = await Promise.all(files.map(file => fileToDataUrl(file)));
		setPhotos((prevPhotos) => ([...newPhotos, ...prevPhotos]))
	}

	const handleRemove = (removedPhoto) => {
		setPhotos(photos.filter((photo) => photo.dataUrl !== removedPhoto.dataUrl));
	}

	return (
		<div className={'photo'}>
			<form className={'photo-form'}>
				<div className={'photo-drop-area'}>
					<input
						className={'photo-drop-area__item photo-drop-area__input'}
						type={'file'}
						onChange={handleSelect}
						multiple />
					<span className={'photo-drop-area__item photo-drop-area__text'}>Click to select</span>
				</div>
			</form>

			<div className={'photo-gallery'}>
				{photos.map((photo) =>
					<div className={'photo-gallery__item'} key={nanoid()}>
						<figure>
							<img className={'photo-gallery__img'} src={photo.dataUrl} alt={photo.title}/>
							<figcaption className={'photo-gallery__img-title'}>{photo.title}</figcaption>
						</figure>
						<button className={'photo-gallery__btn-remove'} onClick={() => handleRemove(photo)}>
							<span className={'_visually-hidden'}>Удалить</span>
						</button>
					</div>
				)}
			</div>
		</div>
	)
}
