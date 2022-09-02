import React, { FC, useCallback } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { app } from '../../../hooks'
import * as resources from '../../../reducks/resources'
import { TUser } from '../../../reducks/resources/user/reducer'
import theme from '../../../styles/theme'
import { Avatar, Container, FormItem, Heading, Text } from '../../atoms'

type TProps = {
  onClose: () => void
  action?: 'CREATE' | 'EDIT'
}

const requiredFieldMessage = 'Campo obrigatório'

const schema = yup.object().shape({
  firstname: yup
    .string()
    .min(1, 'Por favor, digite seu nome')
    .required(requiredFieldMessage)
    .typeError(requiredFieldMessage),
  lastname: yup
    .string()
    .min(1, 'Por favor, digite seu sobrenome')
    .required(requiredFieldMessage)
    .typeError(requiredFieldMessage),
  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required(requiredFieldMessage)
    .typeError(requiredFieldMessage),
  phone: yup
    .string()
    .min(1, 'Por favor, seu telfone')
    .required(requiredFieldMessage)
    .typeError(requiredFieldMessage)
})

const UserForm: FC<TProps> = ({ onClose, action }) => {
  const { useAppSelector, useAppDispatch } = app

  const dispatch = useAppDispatch()

  const { currentUser } = useAppSelector((state) => state.userReducer)

  const {
    formState: { errors },
    register,
    getValues
  } = useForm<TUser>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onChange'
  })

  const onSubmit: React.MouseEventHandler<HTMLButtonElement> = useCallback(
    async (event) => {
      event.preventDefault()

      const values = getValues()

      const {
        email,
        name,
        address: { city, number, street, zipcode },
        phone
      } = values

      const userFake = {
        id: currentUser?.id || Math.random(),
        email,
        username: name.firstname,
        password: currentUser?.password || '#ce',
        name,
        address: {
          city,
          number,
          street,
          zipcode,
          geolocation: {
            lat: currentUser?.address?.geolocation?.lat || '-37.3159',
            long: currentUser?.address?.geolocation?.long || '81.1496'
          }
        },
        phone
      }

      if (onClose) onClose()

      if (action === 'EDIT') {
        dispatch(resources.user.actions.updateUser(userFake))
      } else {
        dispatch(resources.user.actions.createUser(userFake))
      }
    },
    [getValues, currentUser, onClose, action, dispatch]
  )

  return (
    <Container>
      <div className="flex flex-col justify-center items-center">
        {action !== 'CREATE' && (
          <Avatar
            size="xlg"
            image="https://randomuser.me/api/portraits/men/34.jpg"
          />
        )}

        <Heading
          style={{
            fontWeight: 600,
            lineHeight: '125%',
            margin: '16px 0px',
            textTransform: 'capitalize'
          }}
          textColor={theme.colors.text.primaryDark}
          level={6}
        >
          {action === 'CREATE' ? 'Criar' : 'Editar'} usuário
        </Heading>

        <form className="flex h-full flex-col gap-5 mt-3 w-full max-w-xs">
          <Text variant="s" textColor={theme.colors.text.primaryDark} bold>
            Dados Pessoais
          </Text>
          <FormItem full margin="0" error={errors.name?.message}>
            <input
              defaultValue={currentUser?.name?.firstname}
              placeholder="Nome"
              type="text"
              autoFocus
              {...register('name.firstname')}
            />
            <label htmlFor="name">Nome</label>
          </FormItem>
          <FormItem full margin="0" error={errors.name?.message}>
            <input
              defaultValue={currentUser?.name?.lastname}
              placeholder="Sobrenome"
              type="text"
              autoFocus
              {...register('name.lastname')}
            />
            <label htmlFor="lastname">Sobrenome</label>
          </FormItem>
          <FormItem full margin="0" error={errors.name?.message}>
            <input
              defaultValue={currentUser?.email}
              placeholder="E-mail"
              type="text"
              autoFocus
              {...register('email')}
            />
            <label htmlFor="email">E-mail</label>
          </FormItem>
          <FormItem full margin="0" error={errors.name?.message}>
            <input
              defaultValue={currentUser?.phone}
              placeholder="Telefone"
              type="text"
              autoFocus
              {...register('phone')}
            />
            <label htmlFor="phone">Telefone</label>
          </FormItem>

          <Text variant="s" textColor={theme.colors.text.primaryDark} bold>
            Localização
          </Text>

          <FormItem full margin="0" error={errors.name?.message}>
            <input
              defaultValue={currentUser?.address?.street}
              placeholder="Rua"
              type="text"
              autoFocus
              {...register('address.street')}
            />
            <label htmlFor="lastname">Rua</label>
          </FormItem>
          <FormItem full margin="0" error={errors.name?.message}>
            <input
              defaultValue={currentUser?.address?.number}
              placeholder="Número"
              type="text"
              autoFocus
              {...register('address.number')}
            />
            <label htmlFor="number">Número</label>
          </FormItem>
          <FormItem full margin="0" error={errors.name?.message}>
            <input
              defaultValue={currentUser?.address?.city}
              placeholder="Cidade"
              type="text"
              autoFocus
              {...register('address.city')}
            />
            <label htmlFor="city">Cidade</label>
          </FormItem>
          <FormItem full margin="0" error={errors.name?.message}>
            <input
              defaultValue={currentUser?.address?.zipcode}
              placeholder="CEP"
              type="text"
              autoFocus
              {...register('address.zipcode')}
            />
            <label htmlFor="zipcode">CEP</label>
          </FormItem>
          <button
            className="disabled:bg-secondary-lightest py-3 px-4 flex flex-row items-center w-full font-serif bg-brand rounded-3xl justify-center font-semibold text-white hover:bg-brand-hover"
            onClick={onSubmit}
          >
            <div className="order-2 mr-3">
              {action === 'CREATE' ? 'Criar' : 'Editar'}
            </div>
          </button>
        </form>
      </div>
    </Container>
  )
}

export default UserForm
