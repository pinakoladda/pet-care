import React from 'react';
import styles from './index.module.css';
import { PetInfo, PetEditField } from './components/PetInfo';

const COLORS = ["Black", "White", "Red", "Brown", "Yellow", "Cream", "Blue", "Grey"];
const GENDER = ["Male", "Female"];

export const PetPage = () => {

    const fullDate = React.useMemo(() => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const formattedMonth = month <= 9 ? '0' + month : month;
    
        return `${year}-${formattedMonth}-${day}`
    }, []);

    return (
        <main className={styles.petPage}>
            <PetInfo name="Buddy">
                <PetEditField 
                    label="Date of birth" 
                    type="date" 
                    value="2017-10-11"
                    min="1990-01-01"
                    max={fullDate}
                />
                <PetEditField label="Age" value="8 years old" nonEditable />
                <PetEditField value="Libra ♎︎" nonEditable />
                <PetEditField label="Gender" value='male' as="select" >
                    <option value=''>---</option>
                    <option value='male'>male</option>
                    <option value='female'>female</option>
                </PetEditField>
                <PetEditField label="Weight" value="3" type="number" min='0' max='2000'/>
                <PetEditField label="Breed" value="Yorkshire terrier" />
                <PetEditField label="Color" value="..." as='select'>
                    <option value=''>---</option>
                    {COLORS.map((color) => <option key={color} value={color}>{color}</option>)}
                </PetEditField>
                <PetEditField label="Neutered" value='yes' defaultChecked={true} type="checkbox"/>
            </PetInfo>
            
            {/* <section className={styles.helthInfo}>
                <div className={styles.container}>
                    <h4 className={styles.heading}>Last flea and tick treatment:</h4>
                    <p className={styles.paragraph}>date: 10.01.2025</p>
                    <p className={styles.paragraph}>Medcine: simparica trio</p>
                </div>
                <div className={styles.container}>
                    <h4 className={styles.heading}>Last deworming treatment:</h4>
                    <p className={styles.paragraph}>date: 10.12.2025</p>
                    <p className={styles.paragraph}>Medcine: milprazon</p>
                </div>
                <div className={styles.container}>
                    <h4 className={styles.heading}>Last vaccination against pabbies:</h4>
                    <p className={styles.paragraph}>date: 10.12.2025</p>
                    <p className={styles.paragraph}>Medcine: nodivac</p>
                </div>
                <div className={styles.container}>
                    <h4 className={styles.heading}>Last vaccination against L4:</h4>
                    <p className={styles.paragraph}>date: 10.12.2025</p>
                    <p className={styles.paragraph}>Medcine: nodivac</p>
                </div>
                <div className={styles.container}>
                    <h4 className={styles.heading}>Last vaccination against DHPPi:</h4>
                    <p className={styles.paragraph}>date: 10.12.2025</p>
                    <p className={styles.paragraph}>Medcine: nodivac</p>
                </div>
                <div className={styles.container}>
                    <h4 className={styles.heading}>Other vaccinations and treatments:</h4>
                </div>
            </section> */}
            
        </main>
    )
}