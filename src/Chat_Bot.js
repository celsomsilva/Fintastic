import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';


class Chat_Bot extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Bom dia. Posso ajudar em alguma coisa?',
            trigger: '2',
          },
          {id: '2',
            options: [
          { value: 1, label: 'Batida de carro', trigger: '3' },
          { value: 2, label: 'Pneu furado', trigger: '5' },
          { value: 3, label: 'Vazamento em casa', trigger: '7' },
          { value: 4, label: 'Danos por fogo', trigger: '9' },
		  { value: 5, label: 'Não, obrigado', trigger: '18' },
        ],
          },
          {
            id: '3',
            message: 'Ok. Estamos processando o seu pedido',
            trigger: '4',
          },
          {
            id: '4',
            component: (
        <div> Reboque chamado/ Show tow trucks - Fender Bender </div>
            ),
          trigger: '12',
            },
            {
            id: '5',
            message: 'Ok. Estamos processando o seu pedido',
            trigger: '6',
          },
          {
            id: '6',
            component: (
        <div> Reboque chamado/ Show tow trucks - Flat Tire </div>
            ),
          trigger: '12',
            },
            {
            id: '7',
            message: 'Ok. Estamos processando o seu pedido',
            trigger: '8',
          },
          {
            id: '8',
            component: (
        <div> Bombeiro chamado / Show plummers </div>
            ),
          trigger: '12',
            },
            {
            id: '9',
            message: 'Ok. Estamos processando o seu pedido',
            trigger: '10',
          },
          {
            id: '10',
            component: (
        <div> Abrimos o processo de avaliação / Fire Damage </div>
            ),
          trigger: '12',
            },
			{
            id: '11',
            message: 'Posso ajudar em mais alguma coisa?',
          trigger: '2',
            },
			{
            id: '12',
            message: 'Enviei um formulário para o seu email para abrir o processo de reembolso. Por favor responda ao email com o formulário preenchido.',
            trigger: '13',
          },
		  {id: '13',
            component: (
        <div> Enviar email. </div>
            ),
			trigger: '14',
          },
		  {
            id: '14',
            message: 'Você gostaria de mandar uma foto do objeto segurado para adiantar o reembolso?',
            trigger: '15',
          },
		  {id: '15',
            options: [
          { value: 1, label: 'Enviar foto', trigger: '16' },
          { value: 2, label: 'Não obrigado', trigger: '11' },
        ],
          },
		  {
            id: '16',
            component: (
        <div> Upload picture </div>
            ),
          trigger: '17',
            },
			{
            id: '17',
            component: (
        <div> 'Call image recognition function' </div>
            ),
          trigger: '11',
            },
			{
            id: '18',
            message: 'Ok, até logo.',
          end: true,
            },
        ]}
      />
    )
  }
}


export default Chat_Bot;