import React, { FormEvent, ChangeEvent, useState } from 'react';
//import { urlEncode } from '../utils'
//import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'



//function checkFormValidity() {
    // const valid = this.$refs.contact.checkValidity()
    // this.valid = valid
//}

//function submitContactForm() {

    //checkFormValidity()

    // let self = this


    // if (!this.valid) {
    //     console.log("invalid form")
    //     return
    // }

    // axios.post(
    //     '/',
    //     urlEncode(data.form),
    //     { header: { "Content-Type": "application/x-www-form-urlencoded" } }
    // )
    // .then(() => {
    //     self.successfulSubmit = true
    //     // console.log('Form successfully submitted')
    // })
    // .catch((error) => console.log(error))

//}


function ContactMe(props: any) {


    //const [form, setForm] = useState({
                //name: '',
                //email: '',
                //message: '',
                //'form-name': 'contact'
            //})

    //const [validForm, setValidForm] = useState(false)

    //const [successfulSubmit, setSuccess] = useState(false)

    const submitContactForm = function(event: FormEvent) {
            event.preventDefault()
    }

    const handleChange = function(event: ChangeEvent) {
        //const target = event.target
        //const value: string = (target.nodeValue) ? target.nodeValue : ""
        //const name: string = target.nodeName
        //setForm({
            //...form,
           //name: value
        //});
  }


    return (
        <Modal
            {...props}
            size="lg"
            centered
        >

            <Modal.Header closeButton>
                <Modal.Title id="contact-me">Contact Me</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="title">
                    <input type="hidden" name="form-name" value="contact" />

                    <p className="d-none">
                        <input type="text" name="title" />
                    </p>

                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="Name" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" placeholder="What's on your mind?" />
                    </Form.Group>
                </Form>
                
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button variant="primary" onClick={submitContactForm}>
                    Submit
                </Button>
            </Modal.Footer>


        </Modal>

    //     <b-form v-if="!successfulSubmit" name="contact" :validated="true" ref="contact" method="POST" netlify data-netlify="true" data-netlify-honeypot="title">

    //         <p class="d-none">
    //             <input type="text" name="title">
    //         </p>

    //         <b-form-group
    //             id="email-name"
    //             label="Name"
    //             label-for="name-input"
    //         >
    //             <b-form-input
    //                 id="name-input"
    //                 v-model="form.name"
    //                 type="text"
    //                 name="name"
    //                 placeholder="Name"
    //                 required
    //                 ></b-form-input>
    //         </b-form-group>

    //         <b-form-group
    //             id="email-address"
    //             label="Email address"
    //             label-for="email-input"
    //         >
    //             <b-form-input
    //                 id="email-input"
    //                 v-model="form.email"
    //                 type="email"
    //                 name="email"
    //                 placeholder="Enter email"
    //                 required
    //                 ></b-form-input>
    //         </b-form-group>


    //         <b-form-group
    //             id="email-message"
    //             label="Message"
    //             label-for="message-input"
    //             description=""
    //         >

    //             <b-form-textarea
    //                 id="message-input"
    //                 v-model="form.message"
    //                 placeholder="What's on your mind?"
    //                 rows="6"
    //                 name="message"
    //             ></b-form-textarea>

    //         </b-form-group>


    //     </b-form>
    //     <div v-else>
    //             <b-alert show>Thank you for getting in touch!</b-alert>
    //     </div>

    //     <template #modal-footer="{ ok, hide }">
    //         <div class="w-100">
    //             <b-button
    //                 variant="secondary"
    //                 class="float-right"
    //                 @click="hide('forget')"
    //                 v-if="successfulSubmit"
    //             >
    //                 Close
    //             </b-button>
    //             <b-button
    //                 variant="primary"
    //                 class="d-flex ml-auto"
    //                 @click="ok()"
    //                 v-if="!successfulSubmit"
    //             >
    //                 Submit
    //             </b-button>
    //         </div>
    //   </template>

    // </b-modal>
    );

}


export default ContactMe;
