/** @vitest-environment jsdom */

import { cleanup, fireEvent, render, screen, within } from '@testing-library/react'
import axe from 'axe-core'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import App from './App'

afterEach(() => {
  cleanup()
})

describe('portfolio accessibility', () => {
  it('has no automatically detectable accessibility violations', async () => {
    const { container } = render(<App />)
    const results = await axe.run(container, {
      rules: {
        'color-contrast': { enabled: false },
      },
    })

    expect(
      results.violations.map(({ id, help, nodes }) => ({
        id,
        help,
        targets: nodes.map((node) => node.target),
      })),
    ).toEqual([])
  })
})

describe('portfolio experience', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.dataset.theme = 'dark'
  })

  it('renders every primary section with a labelled heading', () => {
    const { container } = render(<App />)

    for (const id of ['about', 'skills', 'projects', 'experience', 'education', 'contact']) {
      expect(container.querySelector(`#${id}`)).not.toBeNull()
    }

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/I build the circuits/i)
    expect(within(container).getByRole('navigation', { name: 'Primary' })).toBeTruthy()
  })

  it('toggles the colour theme and remembers the choice', () => {
    const { container } = render(<App />)
    const header = container.querySelector<HTMLElement>('.site-header')!

    const toggle = within(header).getByRole('button', { name: /switch to light theme/i })
    expect(document.documentElement.dataset.theme).toBe('dark')

    fireEvent.click(toggle)

    expect(document.documentElement.dataset.theme).toBe('light')
    expect(window.localStorage.getItem('mss-theme')).toBe('light')
    expect(within(header).getByRole('button', { name: /switch to dark theme/i })).toBeTruthy()
  })

  it('opens the mobile menu and closes it with Escape', () => {
    const { container } = render(<App />)
    const header = container.querySelector<HTMLElement>('.site-header')!
    const menuButton = within(header).getByRole('button', { name: /open menu/i })

    fireEvent.click(menuButton)
    expect(menuButton.getAttribute('aria-expanded')).toBe('true')

    fireEvent.keyDown(window, { key: 'Escape' })

    expect(menuButton.getAttribute('aria-expanded')).toBe('false')
    expect(document.activeElement).toBe(menuButton)
  })
})
