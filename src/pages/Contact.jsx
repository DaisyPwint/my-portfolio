import Title from '../components/Title'
import ContactInfoItem from '../components/contact/ContactInfoItem';
import Phone from '../assets/phone.png';
import Email from '../assets/email.png';
import Address from '../assets/address.png';

const Contact = () => {
  return (
    <section className='max-w-5xl mx-auto w-11/12 pb-16'>
      <Title className="text-center pb-3">Contact Info</Title>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-textColor'>
        <ContactInfoItem icon={Phone} title="Phone" text="+959 441569788" path="tel:+959 441569788" />
        <ContactInfoItem icon={Email} title="Email" text="phoopwint445@gmail.com" path="mailto:phoopwint445@gmail.com" />
        <ContactInfoItem icon={Address} title="Address" text="Yangon"  />
      </div>
    </section>
  )
}

export default Contact