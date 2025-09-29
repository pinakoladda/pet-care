import React from 'react';
import styles from './index.module.css';
import { PetInfo, PetEditField } from './components/PetInfo';
import { usePetData } from '@/lib/api';
import { Loader } from '@/components/Loader';

const COLORS = ["Black", "White", "Red", "Brown", "Yellow", "Cream", "Blue", "Grey"];
const GENDER = ["Male", "Female"];

const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedMonth = month <= 9 ? '0' + month : month;

    return `${year}-${formattedMonth}-${day}`
}

const formatAge = (date) => {
    const dateNow = Date.now();
    const dateOfBirth = date.getTime();
    const result = dateNow - dateOfBirth;
    const age = result / (1000 * 60 * 60 * 24 * 365);

    return Math.floor(age);
}

export const PetPage = () => {
    const petId = window.location.pathname.split('/')[2];

    const { data, isLoading } = usePetData(petId);
     
    const fullDate = React.useMemo(() => {
        const date = new Date();
        return formatDate(date)
    }, []);

    const date = new Date(data?.birthDate || '1990-01-01')

    return (
        <main className={styles.petPage}>
            {isLoading 
            ? <Loader /> 
            :   <PetInfo name={data?.name}>
                <PetEditField 
                    label="Date of birth" 
                    type="date" 
                    value={formatDate(date)}
                    min="1990-01-01"
                    max={fullDate}
                />
                <PetEditField label="Age" value={`${formatAge(date)} years old`} nonEditable />
                <PetEditField value="Libra ♎︎" nonEditable />
                <PetEditField label="Gender" value={data?.gender} as="select" >
                    <option value=''>---</option>
                    <option value='boy'>good boy</option>
                    <option value='girl'>good girl</option>
                </PetEditField>
                <PetEditField label="Weight" value="3" type="number" min='0' max='2000'/>
                <PetEditField label="Breed" value={data?.breed} />
                <PetEditField label="Color" value="..." as='select'>
                    <option value=''>---</option>
                    {COLORS.map((color) => <option key={color} value={color}>{color}</option>)}
                </PetEditField>
                <PetEditField label="Neutered" value='yes' defaultChecked={true} type="checkbox"/>
            </PetInfo>}
            
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