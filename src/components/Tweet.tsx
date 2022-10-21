import React from 'react'

interface textProps {
  text: string
}

export function Tweet({ text }: textProps) {

  const dividedText = text.match(/.{1,136}($|\s)/g)

  console.log(dividedText)

  return (
    <div className='tweetContainer'>
      <span>Os tweets aparecerão aqui 👇</span>
      {dividedText && dividedText.map(tweet => <p>{tweet}
        <strong className='pagination'> {dividedText.indexOf(tweet) + 1}/{dividedText.length}</strong>
      </p>)}

    </div>
  )
}

