import React from 'react'
import {InfoModal} from '../InfoModal'

export function NurseCard({img, name, description, specialty, address, email, phone}) {
  const [showModal, setShowModal] = React.useState(false);

  return (
<figure className="md:flex bg-slate-100 min-h-80 rounded-lg p-8 md:p-0">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none md:rounded-s-lg rounded-full object-cover mx-auto" src={img} alt="" width="384" height="512" />
  <div className="pt-6 md:p-8 flex flex-col justify-between text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        {description}
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500">
        {name}
      </div>
      <div className="text-slate-700">
        {specialty}
      </div>
    </figcaption>
    <div className="flex w-full justify-between mt-4 md:mt-6">
      <a onClick={() => setShowModal(true)} className="items-center w-full px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">Contactar</a>
  </div>
  </div>
  <InfoModal setShowModal={setShowModal} showModal={showModal} address={address} email={email} phone={phone} />
</figure>
  )
} 