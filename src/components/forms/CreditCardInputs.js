import React from 'react'
import propTypes from 'prop-types'
import { getCardType, makeAcctNumber, makeNumeric } from '@open-tender/js'
import { FormInputs, Input } from '../inputs'

const fields = [
  {
    label: 'Card Number',
    placeholder: '#### #### #### ####',
    name: 'acct',
    type: 'text',
    pattern: '[0-9]*',
    autoComplete: 'cc-number',
  },
  {
    label: 'Expiration',
    placeholder: 'MMYY',
    name: 'exp',
    type: 'text',
    pattern: '[0-9]*',
    autoComplete: 'cc-exp',
  },
  {
    label: 'CVV',
    placeholder: '###',
    name: 'cvv',
    type: 'text',
    pattern: '[0-9]*',
    autoComplete: 'cc-csc',
  },
  {
    label: 'Zip Code',
    placeholder: '#####',
    name: 'zip',
    type: 'text',
    pattern: '[0-9]*',
    autoComplete: 'postal-code',
  },
]

const CreditCardInputs = ({ data, errors, update, setCardType }) => {
  const handleChange = (evt) => {
    let { id, checked, value } = evt.target
    const cleanValue = makeNumeric(value)
    if (id === 'acct') {
      const currentType = getCardType(value.replace(/\s/g, ''))
      setCardType(currentType)
      value = makeAcctNumber(value, currentType)
    } else if (id === 'exp') {
      value = cleanValue.slice(0, 4)
    } else if (id === 'cvv') {
      value = cleanValue.slice(0, 4)
    } else if (id === 'zip') {
      value = cleanValue.slice(0, 5)
    } else if (id === 'save') {
      value = checked
    }
    update({ ...data, [id]: value })
  }

  return (
    <FormInputs>
      {fields.map((field) => (
        <Input
          key={field.name}
          label={field.label}
          name={field.name}
          type={field.type}
          pattern={field.pattern}
          autoComplete={field.autoComplete}
          value={data[field.name]}
          placeholder={field.placeholder}
          onChange={handleChange}
          error={errors[field.name]}
          required={field.required}
        />
      ))}
    </FormInputs>
  )
}

CreditCardInputs.displayName = 'CreditCardInputs'
CreditCardInputs.propTypes = {
  data: propTypes.object,
  errors: propTypes.object,
  update: propTypes.func,
  setCardType: propTypes.func,
}

export default CreditCardInputs
