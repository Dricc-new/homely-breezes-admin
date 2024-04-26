import { PasswordInput } from '../../components/PasswordInput'
import { TextInput } from '../../components/TextInput'
import '../../layouts/AdminLayout/styles.css'
import '../../layouts/AdminLayout/theme-default.css'
export function LoginView() {
    return <>
        <div className="logo flex justify-center mb-4">
            <h1 className="text-5xl">Log<i className="pi pi-android text-4xl" /></h1>
        </div>
        <section className="box-container flex flex-col gap-2 min-w-80">
            <h1 className='text-2xl'>Login</h1>
            <TextInput className='w-full' label='Username or email' />
            <PasswordInput className='w-full' label='Password' />
            <div className='flex justify-end mt-4'>
                <button className='button bg-cyan-600'>Submit</button>
            </div>
        </section>
    </>
}