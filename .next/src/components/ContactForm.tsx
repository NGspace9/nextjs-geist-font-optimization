'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

const formSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  empresa: z.string().min(2, 'Nome da empresa é obrigatório'),
  email: z.string().email('Email inválido'),
  telefone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  tipoEvento: z.string().min(1, 'Selecione o tipo de evento'),
  dataEvento: z.string().optional(),
  localEvento: z.string().optional(),
  numeroParticipantes: z.string().optional(),
  servicos: z.array(z.string()).min(1, 'Selecione pelo menos um serviço'),
  orcamento: z.string().optional(),
  mensagem: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
})

type FormData = z.infer<typeof formSchema>

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      servicos: [],
    }
  })

  const watchedServices = watch('servicos') || []

  const tiposEvento = [
    'Evento Corporativo',
    'Feira/Exposição',
    'Show/Concert',
    'Casamento',
    'Formatura',
    'Congresso/Seminário',
    'Lançamento de Produto',
    'Outro'
  ]

  const servicosDisponiveis = [
    'Painéis de LED',
    'Sonorização',
    'Iluminação',
    'Totens Interativos',
    'Palestras Silenciosas',
    'Assistência Técnica',
    'Transmissão ao Vivo',
    'Efeitos Especiais'
  ]

  const faixasOrcamento = [
    'Até R$ 10.000',
    'R$ 10.000 - R$ 25.000',
    'R$ 25.000 - R$ 50.000',
    'R$ 50.000 - R$ 100.000',
    'Acima de R$ 100.000',
    'A definir'
  ]

  const handleServiceChange = (service: string, checked: boolean) => {
    const currentServices = watchedServices
    if (checked) {
      setValue('servicos', [...currentServices, service])
    } else {
      setValue('servicos', currentServices.filter(s => s !== service))
    }
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simular envio do formulário
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Dados do formulário:', data)
      
      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div>
          <h3 className="font-orbitron font-bold text-2xl text-white mb-2">
            Mensagem Enviada!
          </h3>
          <p className="font-montserrat text-gray-300">
            Recebemos sua solicitação e entraremos em contato em até 24 horas.
          </p>
        </div>
        <Button 
          onClick={() => setSubmitStatus('idle')}
          className="bg-ng-blue hover:bg-ng-red text-white font-montserrat font-medium"
        >
          Enviar Nova Mensagem
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Informações Pessoais */}
      <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 space-y-4">
        <h3 className="font-orbitron font-bold text-lg text-white mb-4">
          Informações de Contato
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="nome" className="font-montserrat text-white">
              Nome Completo *
            </Label>
            <Input
              id="nome"
              {...register('nome')}
              className="bg-gray-800 border-gray-700 text-white focus:border-ng-blue"
              placeholder="Seu nome completo"
            />
            {errors.nome && (
              <p className="text-ng-red text-sm font-montserrat">{errors.nome.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="empresa" className="font-montserrat text-white">
              Empresa *
            </Label>
            <Input
              id="empresa"
              {...register('empresa')}
              className="bg-gray-800 border-gray-700 text-white focus:border-ng-blue"
              placeholder="Nome da empresa"
            />
            {errors.empresa && (
              <p className="text-ng-red text-sm font-montserrat">{errors.empresa.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="font-montserrat text-white">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              className="bg-gray-800 border-gray-700 text-white focus:border-ng-blue"
              placeholder="seu@email.com"
            />
            {errors.email && (
              <p className="text-ng-red text-sm font-montserrat">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefone" className="font-montserrat text-white">
              Telefone *
            </Label>
            <Input
              id="telefone"
              {...register('telefone')}
              className="bg-gray-800 border-gray-700 text-white focus:border-ng-blue"
              placeholder="(11) 99999-9999"
            />
            {errors.telefone && (
              <p className="text-ng-red text-sm font-montserrat">{errors.telefone.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Informações do Evento */}
      <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 space-y-4">
        <h3 className="font-orbitron font-bold text-lg text-white mb-4">
          Detalhes do Evento
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="tipoEvento" className="font-montserrat text-white">
              Tipo de Evento *
            </Label>
            <select
              id="tipoEvento"
              {...register('tipoEvento')}
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 focus:border-ng-blue focus:outline-none"
            >
              <option value="">Selecione o tipo</option>
              {tiposEvento.map((tipo) => (
                <option key={tipo} value={tipo}>{tipo}</option>
              ))}
            </select>
            {errors.tipoEvento && (
              <p className="text-ng-red text-sm font-montserrat">{errors.tipoEvento.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="dataEvento" className="font-montserrat text-white">
              Data do Evento
            </Label>
            <Input
              id="dataEvento"
              type="date"
              {...register('dataEvento')}
              className="bg-gray-800 border-gray-700 text-white focus:border-ng-blue"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="localEvento" className="font-montserrat text-white">
              Local do Evento
            </Label>
            <Input
              id="localEvento"
              {...register('localEvento')}
              className="bg-gray-800 border-gray-700 text-white focus:border-ng-blue"
              placeholder="Cidade, Estado"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="numeroParticipantes" className="font-montserrat text-white">
              Número de Participantes
            </Label>
            <Input
              id="numeroParticipantes"
              {...register('numeroParticipantes')}
              className="bg-gray-800 border-gray-700 text-white focus:border-ng-blue"
              placeholder="Ex: 500 pessoas"
            />
          </div>
        </div>
      </div>

      {/* Serviços */}
      <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 space-y-4">
        <h3 className="font-orbitron font-bold text-lg text-white mb-4">
          Serviços Desejados *
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {servicosDisponiveis.map((servico) => (
            <label key={servico} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={watchedServices.includes(servico)}
                onChange={(e) => handleServiceChange(servico, e.target.checked)}
                className="w-4 h-4 text-ng-blue bg-gray-800 border-gray-700 rounded focus:ring-ng-blue"
              />
              <span className="font-montserrat text-gray-300">{servico}</span>
            </label>
          ))}
        </div>
        {errors.servicos && (
          <p className="text-ng-red text-sm font-montserrat">{errors.servicos.message}</p>
        )}
      </div>

      {/* Orçamento */}
      <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 space-y-4">
        <h3 className="font-orbitron font-bold text-lg text-white mb-4">
          Faixa de Orçamento
        </h3>
        
        <select
          {...register('orcamento')}
          className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 focus:border-ng-blue focus:outline-none"
        >
          <option value="">Selecione uma faixa</option>
          {faixasOrcamento.map((faixa) => (
            <option key={faixa} value={faixa}>{faixa}</option>
          ))}
        </select>
      </div>

      {/* Mensagem */}
      <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 space-y-4">
        <h3 className="font-orbitron font-bold text-lg text-white mb-4">
          Mensagem *
        </h3>
        
        <div className="space-y-2">
          <Textarea
            {...register('mensagem')}
            className="bg-gray-800 border-gray-700 text-white focus:border-ng-blue min-h-[120px]"
            placeholder="Descreva detalhes do seu evento, necessidades específicas ou dúvidas..."
          />
          {errors.mensagem && (
            <p className="text-ng-red text-sm font-montserrat">{errors.mensagem.message}</p>
          )}
        </div>
      </div>

      {/* Status de erro */}
      {submitStatus === 'error' && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-center space-x-3">
          <AlertCircle className="h-5 w-5 text-red-500" />
          <span className="font-montserrat text-red-400">
            Erro ao enviar mensagem. Tente novamente.
          </span>
        </div>
      )}

      {/* Botão de envio */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-ng-blue hover:bg-ng-red text-white font-montserrat font-semibold py-4 text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isSubmitting ? (
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Enviando...</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <Send className="h-5 w-5" />
            <span>Enviar Solicitação</span>
          </div>
        )}
      </Button>
    </form>
  )
}

export default ContactForm
