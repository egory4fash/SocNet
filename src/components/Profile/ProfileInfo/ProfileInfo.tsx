import React from "react";
import classes from "./ProfileInfo.module.css";
import {ProfilePropsType} from "../Profile";
import {Preloader} from "../../Preloader/Preloader";

export const ProfileInfo = (props: ProfilePropsType) => {

    if (!props.profile) {
        return (
            <Preloader/>
        )
    } else {
        return (
            <div>
                <div>
                    <img
                        src="data:image/jpeg;base64,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" alt = {'header'}/>
                </div>
                <div className={classes.descriptionBlock}>
                    <h2>{props.profile.fullName ? props.profile.fullName : "No Name"}</h2>
                    {props.profile.aboutMe ? <div> {props.profile.aboutMe} </div> : <div>About me</div>}
                    {props.profile.photos.large ? <img src={props.profile.photos.large} alt='big-pic'/> : <p>''</p>}
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