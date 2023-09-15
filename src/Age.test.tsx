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

  const ageNodeInYearIndex = 0;
  const ageNodeInMonthIndex = 1;
  const ageNodeInWeekIndex = 2;
  const ageNodeInDayIndex = 3;

  test('1歳の誕生日に各単位で正しい年齢が描画されている', () => {
    // set date to 2022/8/10
    const date = new Date('2022-08-10T00:00:00Z');
    vi.setSystemTime(date);

    render(<Age birthDate={new Date('2021-08-10T00:00:00Z')} />);
    screen.debug();
    const nodes = screen.getAllByRole('listitem');
    expect(nodes[ageNodeInYearIndex]).toHaveTextContent('1歳');
    expect(nodes[ageNodeInMonthIndex]).toHaveTextContent('12ヶ月');
    expect(nodes[ageNodeInWeekIndex]).toHaveTextContent('52週');
    expect(nodes[ageNodeInDayIndex]).toHaveTextContent('365日');
  });

  test('1歳の誕生日の前日に各単位で正しい年齢が描画されている', () => {
    // set date to 2022/8/9
    const date = new Date('2022-08-09T00:00:00Z');
    vi.setSystemTime(date);

    render(<Age birthDate={new Date('2021-08-10T00:00:00Z')} />);
    screen.debug();
    const nodes = screen.getAllByRole('listitem');
    expect(nodes[ageNodeInYearIndex]).toHaveTextContent('0歳');
    expect(nodes[ageNodeInMonthIndex]).toHaveTextContent('11ヶ月');
    expect(nodes[ageNodeInWeekIndex]).toHaveTextContent('52週');
    expect(nodes[ageNodeInDayIndex]).toHaveTextContent('364日');
  });

  test('生誕日に各単位で正しい年齢が描画されている', () => {
    // set date to 2022/8/9
    const date = new Date('2022-08-09T00:00:00Z');
    vi.setSystemTime(date);

    render(<Age birthDate={new Date('2022-08-09T00:00:00Z')} />);
    screen.debug();
    const nodes = screen.getAllByRole('listitem');
    expect(nodes[ageNodeInYearIndex]).toHaveTextContent('0歳');
    expect(nodes[ageNodeInMonthIndex]).toHaveTextContent('0ヶ月');
    expect(nodes[ageNodeInWeekIndex]).toHaveTextContent('0週');
    expect(nodes[ageNodeInDayIndex]).toHaveTextContent('0日');
  });
});
