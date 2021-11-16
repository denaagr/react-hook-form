import React, { Fragment, useState } from 'react';

const Skill = () => {
    //at the top of the component define variables.(define a array of skills)
    const [skills, setSkills] = useState([{id:"A1",title:"Java"}]);


    //creat 2 sub components ShowData & Form
    //1
    const ShowData = (props) => {
        return (
            <Fragment>{props.skills.map(skill => ( //skills => [ {1,JavaSE}, {2, Java EE}]
                <ul className="row pb=2" key={skill.id}>
                    <li className="form-lable">{skill.title}</li>

                </ul>
            ))}</Fragment>

        );
    };


    //2
    // const Form = () => {};
    return (
        <div className="containar">
            <h3>Fullstack developer skills</h3>
            <ShowData skills={skills} />
        </div>
    );
};

export default Skill;