const FormInput = ({ htmlFor, type, placeholder, value, onChange }) => {
  return (
    <>
      <div className="section">
        <label className="label" htmlFor={htmlFor}>
          {htmlFor}
        </label>
        <input value={value} onChange={e => onChange(e.target.value)} className="input" type={type} placeholder={placeholder} />
      </div>
      <style jsx>{`
        .section {
          padding: 3px 0px;
          margin-bottom: 3px;
        }

        .label {
          color: #333;
          font-size: small;
        }

        .input {
          margin: 9px 0;
          margin-top: 9px;
          padding: 8px;
          width: 100%;
          border: none;
          border-radius: 2px;
        }
      `}</style>
    </>
  );
};

export default FormInput;
