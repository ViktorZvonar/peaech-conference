import React from 'react';
import styles from './Materials.module.css';
import { useState, useEffect } from 'react';
import { storage } from '../../fireBase';
import { db } from '../../fireBase';
import { ref, getDownloadURL } from 'firebase/storage';
import { collection, getDocs } from 'firebase/firestore';

function Materials() {
  const [matList, setMatlist] = useState([]);
  const colRef = collection(db, 'materials');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const materialData = [];
        const snapshot = await getDocs(colRef);
        for (let doc of snapshot.docs) {
          const data = doc.data();
          const fileName = data.filename + '.pdf';

          const url = await getDownloadURL(ref(storage, 'mat/' + fileName));
          materialData.push({
            title: data.title,
            author: data.author,
            url: url,
          });
        }
        setMatlist(materialData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <section className={styles.secondSection}>
        {matList.map((material, index) => (
          <div key={index}>
            <h3>{material.title}</h3>
            <p>{material.author}</p>
            <button>
              <a
                href={material.url}
                download={`Document_${index + 1}.pdf`}
                className={styles.downloadButton}
              >
                View PDF
              </a>
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Materials;
