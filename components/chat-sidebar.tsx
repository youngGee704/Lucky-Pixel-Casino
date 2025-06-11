"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

type Message = {
  id: number
  sender: string
  avatar?: string
  content: string
  timestamp: Date
  isUser: boolean
}

export function ChatSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Mock messages
  useEffect(() => {
    const initialMessages: Message[] = [
      {
        id: 1,
        sender: "Support",
        avatar: "/placeholder.svg",
        content: "Hello! How can I help you today?",
        timestamp: new Date(Date.now() - 1000 * 60 * 5),
        isUser: false,
      },
      {
        id: 2,
        sender: "You",
        content: "I have a question about my bonus.",
        timestamp: new Date(Date.now() - 1000 * 60 * 4),
        isUser: true,
      },
      {
        id: 3,
        sender: "Support",
        avatar: "/placeholder.svg",
        content: "Sure, I'd be happy to help with that. What specific question do you have about your bonus?",
        timestamp: new Date(Date.now() - 1000 * 60 * 3),
        isUser: false,
      },
    ]

    setMessages(initialMessages)
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, isOpen])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    const newMessage: Message = {
      id: messages.length + 1,
      sender: "You",
      content: message,
      timestamp: new Date(),
      isUser: true,
    }

    setMessages((prev) => [...prev, newMessage])
    setMessage("")

    // Simulate support response
    setTimeout(() => {
      const supportResponse: Message = {
        id: messages.length + 2,
        sender: "Support",
        avatar: "/placeholder.svg",
        content: "Thanks for your message! Our team will get back to you shortly.",
        timestamp: new Date(),
        isUser: false,
      }
      setMessages((prev) => [...prev, supportResponse])
    }, 1000)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-r from-purple-600 to-gold-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
          isOpen ? "rotate-45" : "hover:scale-110"
        }`}
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>

      {/* Chat Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-background/95 backdrop-blur-sm border-l border-purple-500/20 shadow-xl transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-purple-500/20 bg-gradient-to-r from-purple-600/10 to-gold-500/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-gold-500 flex items-center justify-center">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Live Support</h3>
                  <p className="text-sm text-green-500">● Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
                <div className={`flex max-w-[80%] ${msg.isUser ? "flex-row-reverse" : "flex-row"} items-end space-x-2`}>
                  {!msg.isUser && (
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-gold-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-white font-bold">S</span>
                    </div>
                  )}
                  <div
                    className={`rounded-lg px-3 py-2 ${
                      msg.isUser
                        ? "bg-gradient-to-r from-purple-600 to-gold-500 text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-foreground"
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                    <p className={`text-xs mt-1 ${msg.isUser ? "text-purple-100" : "text-gray-500"}`}>
                      {formatTime(msg.timestamp)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-purple-500/20">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 rounded-lg border border-purple-500/20 bg-background focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                disabled={!message.trim()}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-gold-500 text-white rounded-lg hover:from-purple-700 hover:to-gold-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30" onClick={() => setIsOpen(false)} />}
    </>
  )
}
