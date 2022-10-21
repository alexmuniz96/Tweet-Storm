import React from 'react'

interface textProps {
  text: string
  notWorkBreaker: boolean
}

export function Tweet({ text, notWorkBreaker }: textProps) {

  let regex;
  notWorkBreaker ? regex = /.{1,136}($|\s)/g : regex = /.{1,136}/g;

  const dividedText = text.match(regex)

  return (
    <div className='tweetContainer'>
      <span>Os tweets aparecerão aqui 👇</span>
      {dividedText && dividedText.map(tweet => <p>{tweet}
        <strong className='pagination'> {dividedText.indexOf(tweet) + 1}/{dividedText.length}</strong>
      </p>)}

    </div>
  )
}

