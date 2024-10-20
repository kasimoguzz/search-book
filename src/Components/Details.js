import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './style.module.css'; 

function Details() {
    const books = useSelector((state) => state.book.item);
    const { id } = useParams();
    const status = useSelector((state) => state.book.status);
    const filtered = books.filter((book) => book.id === id);
    const book = filtered[0];
    const navigate = useNavigate();

    if (!book) {
        navigate('/');
        return null;
    }

    return (
        <div className={styles.container}>
            <div>
                {status === "loading" && <h1 className={styles.loading}>Loading...</h1>}
                <Link to="/" className={styles.backLink}>Geri Dön</Link>
            </div>

            <div>
                <h1 className={styles.title}>{book.volumeInfo.title}</h1>
                <p className={styles.info}>Yazar: {book.volumeInfo.authors?.join(', ') || "Yazar bilgisi yok"}</p>
                <p className={styles.description}>Açıklama: {book.volumeInfo.description || "Açıklama mevcut değil."}</p>
                <img
                    className={styles.coverImage}
                    src={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150"}
                    alt={`${book.volumeInfo.title} cover`}
                />
                <p className={styles.info}>Yayınlanma Tarihi: {book.volumeInfo.publishedDate || "Tarih bilgisi yok"}</p>
                <p className={styles.info}>Sayfa Sayısı: {book.volumeInfo.pageCount || "Sayfa sayısı mevcut değil."}</p>
            </div>
        </div>
    );
}

export default Details;
