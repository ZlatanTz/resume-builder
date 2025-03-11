import { useState } from 'react';
import InputField from './InputField.jsx'
import Section from './Section.jsx'
import '.CVForm.css'
const CVForm = () => {
    const [generalInfo, setGeneralInfo] = useState({fname: '', lname: '', email: '', phone: ''})
    const [educationInfo, setEducationInfo] = useState({establishmentName: '', studyTitle: '', dateOfStudyStart: '', dateOfStudyEnd: ''})
    const [experienceInfo, setExperienceInfo] = useState({companyName: '', positionTitle: '', responsibilities: '', dateOfEmployementStart: '', dateOfEmployementEnd: ''})
    const [isEditing, setIsEditing] = useState(true)

    const handleChange = (e, sectionSelector) => {
        const {name, value} = e.target;
        sectionSelector((prev) => ({...prev, [name]: value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsEditing(false)
    }

    return ( isEditing ? <>
        <Section title = "General Information">
            <InputField label = "First Name: " type ="text" name = "fname" value = {generalInfo.fname} onChange={(e) => {handleChange(e, setGeneralInfo)}}/>
            <InputField label = "Last Name: " type = "text" name = "lname" value = {generalInfo.lname} onChange={(e) => {handleChange(e, setGeneralInfo)}}/>
            <InputField label = "Email: " type ="email" name = "email" value = {generalInfo.email} onChange={(e) => {handleChange(e, setGeneralInfo)}}/>
            <InputField label = "Phone: " type ="tel" name = "phone" value = {generalInfo.phone} onChange={(e) => {handleChange(e, setGeneralInfo)}}/>
        </Section>
        <Section title = "Education">
            <InputField label = "Name of establishment: " type ="text" name = "establishmentName" value = {educationInfo.establishmentName} onChange={(e) => {handleChange(e, setEducationInfo)}}/>
            <InputField label = "Title of study: " type = "text" name = "studyTitle" value = {educationInfo.studyTitle} onChange={(e) => {handleChange(e, setEducationInfo)}}/>
            <InputField label = "Date of study (From): " type ="date" name = "dateOfStudyStart" value = {educationInfo.dateOfStudyStart} onChange={(e) => {handleChange(e, setEducationInfo)}}/>
            <InputField label = "Date of study (Until): " type ="date" name = "dateOfStudyEnd" value = {educationInfo.dateOfStudyEnd} onChange={(e) => {handleChange(e, setEducationInfo)}}/>
        </Section>
        <Section title="Experience">
            <InputField label="Company Name: " type="text" name="companyName" value={experienceInfo.companyName} onChange={(e) => {handleChange(e, setExperienceInfo)}} />
            <InputField label="Position Title: " type="text" name="positionTitle" value={experienceInfo.positionTitle} onChange={(e) => {handleChange(e, setExperienceInfo)}} />
            <InputField label="Responsibilities: " type="text" name="responsibilities" value={experienceInfo.responsibilities} onChange={(e) => {handleChange(e, setExperienceInfo)}} />
            <InputField label="Date of Employment (From): " type="date" name="dateOfEmployementStart" value={experienceInfo.dateOfEmployementStart} onChange={(e) => {handleChange(e, setExperienceInfo)}} />
            <InputField label="Date of Employment (Until): " type="date" name="dateOfEmployementEnd" value={experienceInfo.dateOfEmployementEnd} onChange={(e) => {handleChange(e, setExperienceInfo)}} />
        </Section>
        <button onClick = {(e) => {handleSubmit(e)}}>Submit</button>
    </> : 
    <>
        <Section title= "General Information">
            <h3>First Name: {generalInfo.fname}</h3>
            <h3>Last Name: {generalInfo.lname}</h3>
            <h3>Email: {generalInfo.email}</h3>
            <h3>Phone: {generalInfo.phone}</h3>
        </Section>
        <Section title= "Education">
            <h3>Name of establishment: {educationInfo.establishmentName}</h3>
            <h3>Tiltle of study: {educationInfo.studyTitle}</h3>
            <h3>Date of study (From): {educationInfo.dateOfStudyStart}</h3>
            <h3>Date of study (Until): {educationInfo.dateOfStudyEnd}</h3>
        </Section>
        <Section title= "Experience">
            <h3>Company Name: {experienceInfo.companyName}</h3>
            <h3>Position title: {experienceInfo.positionTitle}</h3>
            <h3>Responsibilities: {experienceInfo.responsibilities}</h3>
            <h3>Date of study (From): {educationInfo.dateOfEmployementStart}</h3>
            <h3>Date of study (Until): {educationInfo.dateOfEmployementEnd}</h3>
        </Section>
        <button onClick = {() => {setIsEditing(true)}}>Edit</button>
    </>
    

)
}

export default CVForm;