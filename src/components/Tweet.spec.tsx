import * as React from 'react';
import { screen, render, getNodeText } from "@testing-library/react"
import { Tweet } from "./Tweet"

describe('Tweet Component', () => {

  it("verificar se tweet é renderizado quando tem texto", () => {
    render(<Tweet text={'Lorem ipsum.'} notWorkBreaker={true} />)
    const tweetParagraph = screen.queryByRole("paragraph");
    expect(tweetParagraph).toBeInTheDocument()
  })

  it("verificar se tweet não é renderizado quando não tem texto", () => {
    render(<Tweet text={''} notWorkBreaker={true} />)
    const tweetParagraph = screen.queryByRole("paragraph");
    expect(tweetParagraph).not.toBeInTheDocument()
  })
})

