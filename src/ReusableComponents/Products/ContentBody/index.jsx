import React from 'react'
import Heading from '../../Heading';
import QualityTable from '../QualityTable';
import AdvancedFacility from '../AdvanceFacility';
import ModalTable from '../ModalTable';

const ContentBody = ({title, quality, facility, modal, img}) => {
  return (
    <section className='w-full'>
        <Heading text={title} addStyle={'text-[25px]'} />
        {img && <img src={img} alt={title} className='my-3' />}
        {modal && <ModalTable/>}
        {quality && <QualityTable />}
        {facility && <AdvancedFacility/>}
    </section>
  )
}

export default ContentBody;