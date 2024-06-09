import './form-input.styles.scss'
export default function FormInput({ label, inputOptions }) {

    return (
        <div className="group">
            {label && (
                <label className={`${inputOptions.value.length ? 'shrink' : ''} form-input-label`} htmlFor="displayName">{label}</label>
            )}
            <input type="text" className="form-input" required name="displayName" {...inputOptions} />
        </div>
    )
}