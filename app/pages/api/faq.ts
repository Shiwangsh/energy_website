import type { NextApiRequest, NextApiResponse } from 'next';

type Question = {
  name: number;
  question: string | '';
  answer: string | '';
};

const questions: any = [
  {
    id: 1,
    question: 'Which payment method do you accept?',
    answer:
      'Yatri Energy accepts the following payment methods: Visa, MasterCard, American Express, and Discover credit cards Visa and MasterCard debit cards Apple, Google, and Samsung Pay',
  },
  {
    id: 2,
    question: 'How is pricing derermined?',
    answer:
      'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
  },
  {
    id: 3,
    question: 'Does this new pricing change my premium offer plan?',
    answer:
      'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
  },
  {
    id: 4,
    question:
      'How do I find out if EV charging at my favorite charging location is priced on a per-kWh basis or per-minute basis?',
    answer:
      'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
  },
  {
    id: 5,
    question: 'How do I change my membership plan?',
    answer:
      'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
  },
  {
    id: 6,
    question: 'What happens if my Yatri mobile app wallet runs out of money?',
    answer:
      'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
  },
  {
    id: 7,
    question: 'How is pricing determined?',
    answer:
      'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Question>) {
  res.status(200).json(questions);
}
