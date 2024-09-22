import { IconNames } from "../components/icons/interface";

interface IFormFieldProfile {
    label: string
    name: any
    placeholder: string
}

export const formFieldAgency: IFormFieldProfile[] = [
    {
        label: 'Agency Name',
        name: 'tenant.name',
        placeholder: 'Input Agency Name',
    },
    {
        label: 'Legal Name',
        name: 'tenant.legal_name',
        placeholder: 'Input Last Name',
    },
    {
        label: 'Email',
        name: 'tenant.email',
        placeholder: 'Input Your Email',
    },
    {
        label: 'Phone Number',
        name: 'tenant.phone',
        placeholder: 'Input Your Phone Number',
    },
    {
        label: '2nd Phone Number',
        name: 'tenant.phone2',
        placeholder: 'Input Your 2nd Phone Number',
    },
    {
        label: 'Street Address',
        name: 'tenant.address',
        placeholder: 'Input Address',
    },
    {
        label: 'City',
        name: 'tenant.city',
        placeholder: 'Input City',
    },
    {
        label: 'State',
        name: 'tenant.state',
        placeholder: 'Input State',
    },
    {
        label: 'Zip Code',
        name: 'tenant.zip',
        placeholder: 'Input Your Zip Code',
    },
    {
        label: 'Country',
        name: 'tenant.country',
        placeholder: 'Input Country',
    },
]

export const formFieldProfile: IFormFieldProfile[] = [
    {
        label: 'First Name',
        name: 'profile.firstName',
        placeholder: 'Input First Name',
    },
    {
        label: 'Last Name',
        name: 'profile.lastName',
        placeholder: 'Input Last Name',
    },
    {
        label: 'Email',
        name: 'email',
        placeholder: 'Input Your Email',
    },
    {
        label: 'Phone Number',
        name: 'profile.phone',
        placeholder: 'Input Your Phone Number',
    },
    {
        label: '2nd Phone Number',
        name: 'profile.phone2',
        placeholder: 'Input Your 2nd Phone Number',
    },
    {
        label: 'Mobile Number',
        name: 'profile.mobile',
        placeholder: 'Input Your Mobile Number',
    },
    {
        label: 'Street Address',
        name: 'profile.address',
        placeholder: 'Input Address',
    },
    {
        label: 'City',
        name: 'profile.city',
        placeholder: 'Input City',
    },
    {
        label: 'State',
        name: 'profile.state',
        placeholder: 'Input State',
    },
    {
        label: 'Zip Code',
        name: 'profile.zip',
        placeholder: 'Input Your Zip Code',
    },
    {
        label: 'Country',
        name: 'profile.country',
        placeholder: 'Input Country',
    },
]


interface IFormFieldSocMed {
    label: string;
    placeholder: string;
    icon: IconNames;
}


export const formFieldSocMed: IFormFieldSocMed[] = [
    {
        label: 'Instagram',
        placeholder: 'Input Instagram Url',
        icon: IconNames.instagram
    },
    {
        label: 'Facebook',
        placeholder: 'Input Facebook Url',
        icon: IconNames.facebook
    },
    {
        label: 'Linkedin',
        placeholder: 'Input Linkedin Url',
        icon: IconNames.linkedin
    },
    {
        label: 'Twitter',
        placeholder: 'Input Twitter/X Url',
        icon: IconNames.twitter
    },
]

export const formAddressListing: IFormFieldProfile[] = [
    {
        label: 'Address',
        name: 'address',
        placeholder: 'Input Street Address',
    },
    {
        label: 'City',
        name: 'city',
        placeholder: 'Input City',
    },
    {
        label: 'State',
        name: 'state',
        placeholder: 'Input State',
    },
    {
        label: 'Suburb',
        name: 'suburb',
        placeholder: 'Input Suburb',
    },
    {
        label: 'Area',
        name: 'area',
        placeholder: 'Input Area',
    },
    {
        label: 'Zip Code',
        name: 'zip',
        placeholder: 'Input Zip Code',
    },
    {
        label: 'Country',
        name: 'country',
        placeholder: 'Input Country',
    },
]