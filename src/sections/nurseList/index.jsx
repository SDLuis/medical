
import {nurses} from '../../constants/nurseInfo'
import {NurseCard} from '../../components/NurseCard'

export function NurseList() {
  return (
<div className="w-full p-4 flex flex-col items-center gap-4">
<h1 className="max-w-[1200px] text-3xl md:mt-0 lg:mt-24 font-semibold text-[#199ED3] mb-2">Nuestras enfermeras</h1>
  <div className="max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-6">
{
    nurses.map((nurse, index) => (
        <NurseCard key={index} address={nurse.address} phone={nurse.phone} email={nurse.email} name={nurse.name} img={nurse.img} specialty={nurse.specialty} description={nurse.description} />
    ))
}
</div>
</div>
  )
}