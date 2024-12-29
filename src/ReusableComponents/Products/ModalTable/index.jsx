import React from 'react'

const ModalTable = () => {
    return (
        <table className='w-full text-[#929292] border border-[#d1d1d1]'>
            <tbody className="[&>tr:nth-child(odd)]:bg-gray-100">
                <tr className='border border-[#d1d1d1]'>
                    <td className='border border-[#d1d1d1] p-3'>MODEL</td>
                    <td className='border border-[#d1d1d1] p-3'>OPERATING</td>
                    <td className='border border-[#d1d1d1] p-3'>CATEGORY</td>
                </tr>
                <tr className='border border-[#d1d1d1] h-[40px]'>
                    <td></td> <td></td> <td></td>
                </tr>
                <tr className='border border-[#d1d1d1]'>
                    <td className='border border-[#d1d1d1] p-3'>RO-MS-250</td>
                    <td className='border border-[#d1d1d1] p-3'>MANUAL</td>
                    <td className='border border-[#d1d1d1] p-3'>THT *1</td>
                </tr>
                <tr className='border border-[#d1d1d1]'>
                    <td className='border border-[#d1d1d1] p-3'>RO-MS-1000</td>
                    <td className='border border-[#d1d1d1] p-3'>SEMI AUTO</td>
                    <td className='border border-[#d1d1d1] p-3'>THT *2</td>
                </tr>
                <tr className='border border-[#d1d1d1]'>
                    <td className='border border-[#d1d1d1] p-3'>RO-MS-1000</td>
                    <td className='border border-[#d1d1d1] p-3'>FULLY AUTO</td>
                    <td className='border border-[#d1d1d1] p-3'>THT *3</td>
                </tr>
                <tr className='border border-[#d1d1d1]'>
                    <td className='border border-[#d1d1d1] p-3'>RO-SS-1000</td>
                    <td className='border border-[#d1d1d1] p-3'>MANUAL</td>
                    <td className='border border-[#d1d1d1] p-3'>THT *4</td>
                </tr>
                <tr className='border border-[#d1d1d1]'>
                    <td className='border border-[#d1d1d1] p-3'>RO-SS-1000</td>
                    <td className='border border-[#d1d1d1] p-3'>SEMI AUTO</td>
                    <td className='border border-[#d1d1d1] p-3'>THT *5</td>
                </tr>
            </tbody>
        </table>
    )
}

export default ModalTable