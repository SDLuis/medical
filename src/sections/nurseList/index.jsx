
import {nurses} from '../../constants/nurseInfo'
import {NurseCard} from '../../components/NurseCard'

export function NurseList() {
  return (
<div className="w-full p-4 flex justify-center gap-4 items-center">
  <div className="max-w-[1200px] mt-32 grid grid-cols-1 lg:grid-cols-2 gap-6">
{
    nurses.map((nurse, index) => (
        <NurseCard key={index} address={nurse.address} phone={nurse.phone} email={nurse.email} name={nurse.name} img={nurse.img} specialty={nurse.specialty} description={nurse.description} />
    ))
}
</div>
</div>
  )
}