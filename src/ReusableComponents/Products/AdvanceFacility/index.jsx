import React from 'react'
import Heading from '../../Heading';

const AdvancedFacility = () => {
  return (
    <div className='my-5'>
      <Heading text='ADVANCE FACILITY' addStyle={"text-[25px]"} />
      <table className='text-[#929292] border border-[#d1d1d1]'>
        <tbody className="[&>tr:nth-child(odd)]:bg-gray-100">
          <tr className='border border-[#d1d1d1]'>
            <td className='border border-[#d1d1d1] p-3'>AUTO FLUSHING</td>
            <td className='border border-[#d1d1d1] p-3'>IT FLUSH THE MEMBRANES ON EVERY START</td>
          </tr>
          <tr className='border border-[#d1d1d1]'>
            <td className='border border-[#d1d1d1] p-3'>AUTOMATIC RAW WATER ON & OFF SYSTEM</td>
            <td className='border border-[#d1d1d1] p-3'>SOLENOID VALVE SS 304</td>
          </tr>
          <tr className='border border-[#d1d1d1]'>
            <td className='border border-[#d1d1d1] p-3'>AUTO MPV</td>
            <td className='border border-[#d1d1d1] p-3'>SAND FILTER BACKWASH / RINSE CYCLE IS INITIATED AUTOMATICALLY</td>
          </tr>
          <tr className='border border-[#d1d1d1]'>
            <td className='border border-[#d1d1d1] p-3'>AUTO MATIC ON & OFF SYSTEM</td>
            <td className='border border-[#d1d1d1] p-3'>FLOATING SWITCH</td>
          </tr>
          <tr className='border border-[#d1d1d1]'>
            <td className='border border-[#d1d1d1] p-3'>UV</td>
            <td className='border border-[#d1d1d1] p-3'>TO STERILIZE THE WATER</td>
          </tr>
          <tr className='border border-[#d1d1d1]'>
            <td className='border border-[#d1d1d1] p-3'>OZONATOR</td>
            <td className='border border-[#d1d1d1] p-3'>TO DISINFECT THE WATER</td>
          </tr>
          <tr className='border border-[#d1d1d1]'>
            <td className='border border-[#d1d1d1] p-3'>DM</td>
            <td className='border border-[#d1d1d1] p-3'>TO DEMINERALISE THE WATER</td>
          </tr>
          <tr className='border border-[#d1d1d1]'>
            <td className='border border-[#d1d1d1] p-3'>SOFTNER</td>
            <td className='border border-[#d1d1d1] p-3'>TO REMOVE TOTAL HARDNESS UP TO 90% BEFORE R.O PROCESS</td>
          </tr>
          <tr className='border border-[#d1d1d1]'>
            <td className='border border-[#d1d1d1] p-3'>CLEANING IN PLACE SYSTEMS</td>
            <td className='border border-[#d1d1d1] p-3'>TO CLEAN THE MEMBRANE.</td>
          </tr>
          <tr className='border border-[#d1d1d1]'>
            <td className='border border-[#d1d1d1] p-3'>ELECTRICAL PANEL</td>
            <td className='border border-[#d1d1d1] p-3'>PLC BASE / REMOTE MONITORING / AUTO DISPENSING SYSTEM</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AdvancedFacility;