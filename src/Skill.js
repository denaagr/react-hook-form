import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Skill = () => {
    //at the top of the component define variables.(define a array of skills)
    const [skills, setSkills] = useState([]);
    useEffect(()=>{
        //call API then get skills list then set it into the skill list(next lecture) here use hardcode
        const mySkills=[{id:'A1',title:'Java'}, {id:'A2',title:'Java script'}];
        setSkills(mySkills);
    },[])


    //creat 2 sub components ShowData & Form
    //1
    const ShowData = (props) => {
        return (
            <Fragment>{props.skills.map(skill => ( //skills => [ {1,JavaSE}, {2, Java EE}]//skil  avalin object list skills hast
                <ul className="row pb=2" key={skill.id}>
                    <li className="form-lable">{skill.title}</li>

                </ul>
            ))}</Fragment>

        );
    };
    //2
    // const Form = () => {};

    const Form = () =>{
        const { register,handleSubmit,formState:{errors}}=useForm();
        //create a function inside the form
        const saveData=(data)=>{
            console.log(data);
 };
    //map useForm to myForm-- Form component return HTML form 
    //map input to useForm using register line 45

    return(
        <Fragment>
            <h5>My Form</h5>
            <form onSubmit={handleSubmit(saveData)}>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control"{ ...register("title,{required:true}") }placeholder="Enter title"/>
                        {errors.title &&<span className="text-danger">title is required</span>}

                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-success">+</button>

                    </div>

                </div>

            </form>
        </Fragment>
    );
        

    }



    return (
        <div className="containar">
            <h3>Fullstack developer skills</h3>
            <ShowData skills={skills} />
            <Form/>
        </div>
    );
};

export default Skill;