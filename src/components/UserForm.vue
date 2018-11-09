<template>
<div>
    <b-row class="form_row">
        <b-col>
            <b-form-group id="nameInputGroup"
            label-for="nameInput">
                <b-form-input id="nameInput"
                type="text"
                placeholder="Nom">
                </b-form-input>
            </b-form-group>
        </b-col>

        <b-col>
            <b-form-group id="firstnameInputGroup"
            label-for="firstnameInput">
                <b-form-input id="firstnameInput"
                type="text"
                placeholder="Prénom">
                </b-form-input>
            </b-form-group>
        </b-col>
    </b-row>

    <b-row class="form_row">
        <b-col>
            <b-form-group id="birthdateInputGroup"
            label = "Date de naissance:"
            label-for="birthdateInput">
                <b-form-input id="birthdateInput"
                type="date">
                </b-form-input>
            </b-form-group>
        </b-col>

        <b-col>
            <b-form-group id="emailInputGroup"
            label = "Adresse mail:"
            label-for="emailInput">
                <b-form-input id="emailInput"
                type="email">
                </b-form-input>
            </b-form-group>
        </b-col>

        <b-col>
            <b-form-group id="phoneInputGroup"
            label = "Numéro de téléphone:"
            label-for="phoneInput">
                <b-form-input id="phoneInput"
                type="tel">
                </b-form-input>
            </b-form-group>
        </b-col>
    </b-row>

    <b-row>
        <b-col cols="1">
            <b-form-group id="numberadressGroup"
            label = "N°"
            label-for="numberadressInput">
                <b-form-input id="numberadressInput"
                type="number">
            </b-form-input>
            </b-form-group>
        </b-col>

        <b-col cols="7">
            <b-form-group id="roadadressGroup"
            label = "Nom de la voie"
            label-for="roadadressInput">
                <b-form-input id="roadadressInput"
                type="text">
            </b-form-input>
            </b-form-group>
        </b-col>

        <b-col cols="4">
            <b-form-group id="completadressGroup"
            label = "Complément d'adresse"
            label-for="completadressInput">
                <b-form-input id="completadressInput"
                type="text">
            </b-form-input>
            </b-form-group>
        </b-col>

        <b-col cols="3">
            <b-form-group id="cityadressGroup"
            label = "Ville"
            label-for="cityadressInput">
                <b-form-input id="cityadressInput"
                type="text">
            </b-form-input>
            </b-form-group>
        </b-col>

        <b-col cols="2">
            <b-form-group id="codeadressGroup"
            label = "Code postal"
            label-for="codeadressInput">
                <b-form-input id="codeadressInput"
                type="number">
            </b-form-input>
            </b-form-group>
        </b-col>

    </b-row>
</div>
</template>
