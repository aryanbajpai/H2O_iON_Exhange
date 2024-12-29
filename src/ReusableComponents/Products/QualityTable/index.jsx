import React from 'react'

const QualityTable = () => {
    return (
        <table className='text-[#929292] border border-[#d1d1d1] my-5'>

            <tbody className="[&>tr:nth-child(odd)]:bg-gray-100">
                <tr className='border border-[#d1d1d1]'>
                    <td className='border border-[#d1d1d1] p-3' rowSpan='3'>QUALITY</td>
                    <td className='border border-[#d1d1d1] p-3'>MS</td>
                    <td className='border border-[#d1d1d1] p-3'>MADE IN MS METAL & POWDER COATING/FRP</td>
                </tr>
                <tr className='border border-[#d1d1d1]'>
                    <td className='border border-[#d1d1d1] p-3'>SEMI SS</td>
                    <td className='border border-[#d1d1d1] p-3'>STRUCTURE, PENAL, PRESSURE TUBE ALL ARE MADE IN SS 304/316</td>
                </tr>
                <tr className='border border-[#d1d1d1]'>
                    <td className='border border-[#d1d1d1] p-3'>SS DELUXE</td>
                    <td className='border border-[#d1d1d1] p-3'>STRUCTURE, PENAL,PRESSURE TUBE, VESSELS, PIPELINES, ALL ARE MADE IN SS 304/316</td>
                </tr>
                <tr className='border border-[#d1d1d1]'>
                    <td className='border border-[#d1d1d1] p-3'>SKID</td>
                    <td className='border border-[#d1d1d1] p-3'>SKID TO MOUNT THE WHOLE SYSTEM</td>
                    <td className='border border-[#d1d1d1] p-3' rowSpan='8'></td>
                </tr>
                <tr className='border border-[#d1d1d1]'>
                    <td className='border border-[#d1d1d1] p-3'>FEED PUMPS</td>
                    <td className='border border-[#d1d1d1] p-3'>FOR FEED OF RAW WATER</td>
                </tr>
                <tr className='border border-[#d1d1d1]'>
                    <td className='border border-[#d1d1d1] p-3'>SAND FILTERT</td>
                    <td className='border border-[#d1d1d1] p-3'>FOR REMOVES THE SUSPENDED SOLIDS FROM THE WATER</td>
                </tr>
                <tr className='border border-[#d1d1d1]'>
                    <td className='border border-[#d1d1d1] p-3'>G.A CARBON FILTER</td>
                    <td className='border border-[#d1d1d1] p-3'>REMOVES HEAVY ORGANIC IMPURITIES AND DISSOLVED GASES, CHLORIN, BAD ODOR AND SMELL.</td>
                </tr>
                <tr className='border border-[#d1d1d1]'>
                    <td className='border border-[#d1d1d1] p-3'>ANTISCALANT DOSING SYATEM</td>
                    <td className='border border-[#d1d1d1] p-3'>TO CONTROL THE SCALING OF THE RO</td>
                </tr>
                <tr className='border border-[#d1d1d1]'>
                    <td className='border border-[#d1d1d1] p-3'>MICRON CARTRIDGE FILTER</td>
                    <td className='border border-[#d1d1d1] p-3'>TO TRACEABILITY OF THE WATER</td>
                </tr>
                <tr className='border border-[#d1d1d1]'>
                    <td className='border border-[#d1d1d1] p-3'>HIGH PRESSURE PUMP</td>
                    <td className='border border-[#d1d1d1] p-3'>CREATE OSMOTIC PRESSURE FOR THE REVERSE OSMOSIS PRESSURE</td>
                </tr>
                <tr className='border border-[#d1d1d1]'>
                    <td className='border border-[#d1d1d1] p-3'>REVERSE OSMOSIS SYSTEM</td>
                    <td className='border border-[#d1d1d1] p-3'>TO REMOVE THE TOTEL DISSOLVED SOLIDS OF THE WATER. UP TO 90%-99.6%</td>
                </tr>
            </tbody>
        </table>
    )
}

export default QualityTable