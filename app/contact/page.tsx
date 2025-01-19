"use client"
import { useState, useEffect, useRef } from "react";
import Container from "@/components/container";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Elvira Firmansyah"
  }, [])
  const formRef = useRef(null);
  
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyrnF-v9mgKQBuVQ4KInPE0ECi5YeNTeNyFH45ysVZy-ZLjYKlPHzB83oCiX6rLy2tUrg/exec'

  const [loading, setLoading] = useState(false);
  const handleSubmit = (e : any) => {
    e.preventDefault()
   
    if (!formRef.current) {
      console.error("formRef is null or undefined.");
      return;
    }
    const form = e.target as HTMLFormElement;

    setLoading(true);
    fetch(scriptURL, { method: 'POST', body: new FormData(formRef.current) })
      .then(response => {
        setLoading(false);
        alert("Success sent the message!");
        form.reset();
        console.log('Success!', response)
      })
      .catch((error) => {
        alert("Failed sent the message!!");
        console.error('Error:', error);
      });
  }
  return (
    <div className="dark:bg-gradient-to-tr md:h-lvh from-mediumpastel via-viapastel to-pastel">
      <Container>
        <section id="contact" className="py-28 overflow-hidden">
          <div className="flex flex-col md:items-center justify-center md:space-y-0">
            <div className="md:w-3/4 lg:w-full space-y-2  ">
              <div className="flex flex-col justify-center items-center text-center pb-3">
                <h1 className="font-bold text-4xl lg:text-title2 tracking-title text-primary">Get In Touch
                </h1>
                <p className="text-desc text-lg tracking-desc font-normal  max-w-xl">Got a question or proposal, or just want to say hello? Go ahead.</p>
              </div>
              <hr className="bg-[#EEF1F6] border-[0.5] border-[#EEF1F6] dark:border-navdark dark:bg-navdark " />
            </div>
            <hr className="bg-[#EEF1F6] border-[0.5] border-[#EEF1F6] dark:border-navdark dark:bg-navdark" />
            <div className="flex flex-col md:flex-row items-start md:items-start pt-6 md:space-x-20 space-y-6 md:space-y-0">
              <div className="flex flex-col space-y-1">
                <div className="items-start">
                  <h3 className="text-2xl font-bold text-primary">Contact Information</h3>
                  <p className="text-desc tracking-desc pb-2">Our friendly team would have to hear from you</p>
                  <hr className="bg-[#EEF1F6] border-[0.5] border-[#EEF1F6] dark:border-navdark dark:bg-navdark " />
                </div>
                <div className="py-5 items-start flex flex-col space-y-3">
                  <span><i className="fa-solid fa-envelope fa-lg"></i>&nbsp; elvirafirmansyah@gmail.com</span>
                  <span><i className="fa-solid fa-location-dot fa-lg"></i>&nbsp; Palembang, Indonesia</span>
                </div>
              </div>  

              <form ref={formRef} name='contact-my-website'onSubmit={handleSubmit} >
                <div className="flex flex-col items-start space-y-6 w-full h-full ">
                  <div className="grid grid-cols-2 gap-x-3 gap-y-6 w-full">
                    <div className="col-span-1">
                      <div className="space-y-1.5">
                        <label>First Name</label>
                        <Input type="text" placeholder="Elvira" name="nama" required
                        />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="space-y-1.5">
                        <label>Last Name</label>
                        <Input type="text" placeholder="Firmansyah" name="last_name" required />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="space-y-1.5">
                        <label>Email</label>
                        <Input type="email" placeholder="hello@gmail.com" name="email" required
                        />
                      </div>
                    </div >
                    <div className="col-span-2 space-y-1.5">
                      <label>Messages</label>
                      <Textarea name="pesan" placeholder="Your Messages" required
                      />
                    </div>
                    <div className="col-span-2">
                      {loading ? (
                        <Button
                          variant="detail_outline"
                          className="w-full text-desc "
                        >
                          Loading..
                        </Button>
                      ) : (
                        <Button
                          variant="primary"
                          className="w-full"
                        >
                          Send Messages &nbsp;<i className="fa-solid fa-paper-plane"></i>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </form>


            </div>
          </div>
        </section>
      </Container>
    </div>

  );
}

export default Contact;