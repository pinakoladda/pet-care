import React from 'react';
import { PetInfo, PetEditField } from './components/PetInfo';
import { usePetData } from '@/lib/api';
import { Loader } from '@/components/Loader';
import { useAuthRouting } from '@/hooks/useAuthRouting';
import styles from './index.module.css';
import { Header } from '@/components/Header';

const COLORS = ["Black", "White", "Red", "Brown", "Yellow", "Cream", "Blue", "Grey"];

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
    useAuthRouting()
    const petId = window.location.pathname.split('/')[2];

    const { data, isLoading } = usePetData(petId);
     
    const fullDate = React.useMemo(() => {
        const date = new Date();
        return formatDate(date)
    }, []);

    const date = new Date(data?.birthDate || '1990-01-01')

    return (
        <main className={styles.petPage}>
            <Header />
            {isLoading 
            ? <Loader /> 
            :   <PetInfo name={data?.name} petId={petId} avatar={data?.avatarUrl.lg} >
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
        </main>
    )
}