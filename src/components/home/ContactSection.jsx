import Title from '../Title'
import Button from '../Button'

const ContactSection = () => {
  return (
    <section className='pt-32'>
      <div className='bg-cardBg rounded-lg text-center py-14'>
        <p className='text-md text-amber-600'>Have a project in mind</p>
        <Title className="mb-2">Let me help you</Title>
        <Button direction="/contact">Contact Now</Button>
      </div>
    </section>
  )
}

export default ContactSection