import ContactForm from "@/app/components/ContactForm"


const page = () => {
  return (
    <main className="flex grow flex-col items-center justify-center">
      <div className="space-y-4">
        <h1 className="text-4xl">Contact Us</h1>
        <ContactForm />
      </div>
    </main>
  )
}

export default page

