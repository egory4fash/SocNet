import React from "react";
import classes from "./ProfileInfo.module.css";
import {ProfilePropsType} from "../Profile";
import {Preloader} from "../../Preloader/Preloader";
import Status from "./Status";



export const ProfileInfo = (props: ProfilePropsType) => {

    if (!props.profile) {
        return (
            <Preloader/>
        )
    }
    else {
        return (
            <div>
               <div>
                   <Status status={props.status}/>
               </div>
                <div className={classes.descriptionBlock}>
                    <h2>{props.profile.fullName ? props.profile.fullName : "No Name"}</h2>
                    {props.profile.aboutMe ? <div> {props.profile.aboutMe} </div> : <div>About me</div>}
                    {props.profile.photos.large
                        ? <img src={props.profile.photos.large} alt='big-pic'/> :
                        <img src = {'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg?20160324051252'} alt='no user photo' />}
                    {props.profile.photos.small ? <img src={props.profile.photos.small} alt='small-pic'/> : <p>''</p>}
                    {props.profile.contacts ? <ul>
                            <li>{props.profile.contacts.vk ? props.profile.contacts.vk : ""}</li>
                            <li>{props.profile.contacts.github ? props.profile.contacts.github : ""}</li>
                            <li>{props.profile.contacts.facebook ? props.profile.contacts.facebook : ""}</li>
                            <li>{props.profile.contacts.twitter ? props.profile.contacts.twitter : ""}</li>
                            <li>{props.profile.contacts.website ? props.profile.contacts.website : ""}</li>
                            <li>{props.profile.contacts.instagram ? props.profile.contacts.instagram : ""}</li>
                            <li>{props.profile.contacts.mainLink ? props.profile.contacts.mainLink : ""}</li>
                            <li>{props.profile.contacts.youtube ? props.profile.contacts.youtube : ""}</li>
                        </ul>
                        : <div>Contacts</div>}
                    {props.profile.lookingForAJob ?
                        <div>"ИЩУ РАБОТУ:"<br/>{props.profile.lookingForAJobDescription}</div> : ''}

                </div>
            </div>
        )
    }
}