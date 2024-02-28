import './Footer.style.scss'
import { Modal } from 'antd'
import { useState } from 'react'

const Footer = () => {
  const data = [
    {
      title: 'Conócenos',
      text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
            quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam 
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`
    },
    {
      title: 'FAQ',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
            id est laborum.`
    },
    {
      title: 'Contacto',
      text: 'envía tus consultas, dudas o sugerencias a contacto@ecommerce.com'
    },
    {
      title: 'Aviso Legal',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
            id est laborum.`
    }
  ]

  const [selectedOption, setSelectedOption] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showOption = (option) => {
    setSelectedOption(option)
    showModal()
  };

  return (
    <>
    <div className='footer'>
      <p className='footer__element' onClick={() => showOption(data[0])}>Conócenos</p>
      <p className='footer__element' onClick={() => showOption(data[1])}>FAQ</p>
      <p className='footer__element' onClick={() => showOption(data[2])}>Contacto</p>
      <p className='footer__element' onClick={() => showOption(data[3])}>Aviso Legal</p>

    </div>

      {selectedOption && (
        <Modal
          keyboard={true}
          centered={true}
          footer={null}
          title={selectedOption.title}
          open={isModalOpen}
          onCancel={handleCancel}
        >
          <p>{selectedOption.text}</p>
        </Modal>
      )}
    
    </>
  )
}

export default Footer