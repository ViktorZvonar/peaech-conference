import React from 'react';
import styles from './Materials.module.css';
import { useState, useEffect } from 'react';
import { storage } from '../../fireBase';
import { db } from '../../fireBase';
import { ref, getDownloadURL } from 'firebase/storage';
import { collection, getDocs } from 'firebase/firestore';

function Materials() {
  const [matList, setMatlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, 'materials');
        const snapshot = await getDocs(colRef);

        const materialDataPromises = snapshot.docs.map(async doc => {
          const data = doc.data();
          const fileName = data.filename + '.pdf';
          const url = await getDownloadURL(ref(storage, 'mat/' + fileName));

          return {
            title: data.title,
            author: data.author,
            url: url,
          };
        });

        const materialData = await Promise.all(materialDataPromises);

        setMatlist(materialData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(matList.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentItems = matList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main>
      <section className={styles.firstSection}>
        <h1 className={styles.h1}>Reference</h1>
        <div className={styles.refContainer}>
          <h2 className={styles.h1}>Original:</h2>
          <p className={styles.p}>
            Миротворча освіта заради консолідованої та людиноцентричної Європи:
            Доповіді всеукр. наук.-практ. конф., м.Київ, 16 червня 2023 р.:
            Київ, Київський університет імені Бориса Грінченка, 2023. – 150 с.
          </p>
          <h2 className={styles.h1}>English:</h2>
          <p className={styles.p}>
            Peace Education for Consolidated and Human-Centered Europe:
            Proceedings of the All-Ukrainian Scientific and Practical
            Conference, Kyiv, June 16, 2023: Kyiv, Borys Grinchenko Kyiv
            University, 2023. – 150 pages.
          </p>
        </div>
        <p className={styles.p}>ISBN: 978-9943-26-234-1</p>
        <p className={styles.p}>DOI: 10.28925/2023.166150conf</p>
      </section>
      <section className={styles.secondSection}>
        {currentItems.map((material, index) => (
          <div key={index} className={styles.dataContainer}>
            <div className={styles.textContainer}>
              <h3>{material.title}</h3>
              <p>{material.author}</p>
            </div>
            <button className={styles.downloadButton}>
              <a
                href={material.url}
                download={`Document_${
                  (currentPage - 1) * itemsPerPage + index + 1
                }.pdf`}
              >
                View PDF
              </a>
            </button>
          </div>
        ))}
        <div className={styles.pagination}>
          <button onClick={handlePrev} hidden={currentPage <= 1}>
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={handleNext} hidden={currentPage >= totalPages}>
            Next
          </button>
        </div>
      </section>
    </main>
  );
}

export default Materials;
