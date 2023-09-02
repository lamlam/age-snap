import '@testing-library/jest-dom';
import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Age } from './Age';

describe('test Age Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test('太郎が描画されている', () => {
    render(<Age name="太郎" birthDate={new Date('2021-08-10T03:24:00')} />);
    screen.debug();
    expect(screen.getByText('太郎')).toBeInTheDocument();
  });

  test('1歳の誕生日に1歳が描画されている', () => {
    // set date to 2022/8/10
    const date = new Date('2022-08-10T00:00:00Z');
    vi.setSystemTime(date);

    render(<Age name="太郎" birthDate={new Date('2021-08-10T00:00:00Z')} />);
    screen.debug();
    expect(screen.getByText('1歳')).toBeInTheDocument();
  });

  test('1歳の誕生日の前日に0歳が描画されている', () => {
    // set date to 2022/8/9
    const date = new Date('2022-08-09T00:00:00Z');
    vi.setSystemTime(date);

    render(<Age name="太郎" birthDate={new Date('2021-08-10T00:00:00Z')} />);
    screen.debug();
    expect(screen.getByText('0歳')).toBeInTheDocument();
  });
});
