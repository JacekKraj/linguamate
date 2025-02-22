import { ArticleImage } from '@/components/articles/articleImage/ArticleImage';
import { ArticleParagraph } from '@/components/articles/articleParagraph/ArticleParagraph';
import { ArticleSubHeader } from '@/components/articles/articleSubHeader/ArticleSubHeader';
import { ArticleUnorderedList } from '@/components/articles/articleUnorderedList/ArticleUnorderedList';
import { ArticleUnorderedListItem } from '@/components/articles/articleUnorderedList/ArticleUnorderedListItem';
import { ArticleWrapper } from '@/components/articles/articleWrapper/ArticleWrapper';
import { PageHeader } from '@/components/common/pageHeader/PageHeader';
import { ArticleNames } from '@/utils/articleData/articles';

export const SpeakBrittishAccentArticle = () => (
  <ArticleWrapper>
    <PageHeader articleData={{ publicationTimestamp: Date.now(), minsRead: 5 }}>
      {ArticleNames.BRITISH_ACCENT}
    </PageHeader>
    <ArticleParagraph>
      No matter how good your English is in terms of grammar and vocabulary, there is always one
      element missing for you and probably 99% of other non-native speakers: the accent. The problem
      we all face is that even though we&apos;ve been learnig English for ages, our accent
      doesn&apos;t seem to improve as the time flies. For this reason, you might wonder if it&apos;s
      at all possible for a foreigner to ever sound like a Londoner without being born there.
    </ArticleParagraph>
    <ArticleImage src="/images/articles/britishAccent.webp" alt="Learning British accent at home" />
    <ArticleSubHeader>Is it possible for foreigners to learn a British accent?</ArticleSubHeader>
    <ArticleParagraph>
      At this point, you can calm down because the answer is yes. From my personal experience, I can
      tell you that there are only two ways to achieve satisfying results. These are:
    </ArticleParagraph>
    <ArticleUnorderedList>
      <ArticleUnorderedListItem>moving to Great Britain</ArticleUnorderedListItem>
      <ArticleUnorderedListItem>
        behaving as if you were living in Great Britain
      </ArticleUnorderedListItem>
    </ArticleUnorderedList>
    <ArticleParagraph>
      If you&apos;re able to move and live there, this article is redundant. Sooner or later, the
      results will come without much effort on your part. Unfortunately, for most of us, moving to
      another country isn&apos;t an option. Considering that all we can do is to follow the second
      option. Before I explain what it means to behave as if you were living in Great Britain and
      what the secret exercise is, we need to understand why moving to another country is so
      effective for getting the proper accent.
    </ArticleParagraph>
    <ArticleSubHeader>
      Why foreigners learn the accent so easily when they move to Great Britain?
    </ArticleSubHeader>
    <ArticleParagraph>
      The answer to this question couldn&apos;t be simpler. They spend entire days on listening to
      others and repeating what they hear. You might say that&apos;s not true because you do the
      same thing for years, yet the results aren&apos;t satisfying. It turns out there are two main
      reasons for their success and your struggle
    </ArticleParagraph>
    <ArticleUnorderedList>
      <ArticleUnorderedListItem>the accent of the speakers you listen to</ArticleUnorderedListItem>
      <ArticleUnorderedListItem>the time of exposure to a given language</ArticleUnorderedListItem>
    </ArticleUnorderedList>
    <ArticleParagraph>
      People moving to Great Britain are exposed to several hours of listening to native speakers
      every day. Being under such strong influence for a long time means that when they start
      speaking, they subconsciously repeat what they&apos;ve already heard. And it doesn&apos;t just
      apply to the words they say. It also affects how they say them, so to the accent. This
      conclusion shouldn&apos;t be surprising. That&apos;s how you learned your native language. As
      a baby you were constantly listening to native speakers talking all the time and eventually
      you started repeating what you heard.
    </ArticleParagraph>
    <ArticleParagraph>
      Do you already see what&apos;s the difference between your situation and the one described in
      above? The problem is that even when you speak or listen to English, your conversation
      partners are most likely from the same country as you are (or any other non-English speaking
      country), and second of all you don&apos;t spend on it as much time as is required. Luckily
      there are a couple of ways to overcome these obstacles.
    </ArticleParagraph>
    <ArticleSubHeader>How to learn a British accent at home?</ArticleSubHeader>
    <ArticleParagraph>
      Exercises that will let you speak with British accent can be divided into two categories:
    </ArticleParagraph>
    <ArticleUnorderedList>
      <ArticleUnorderedListItem>active exercises</ArticleUnorderedListItem>
      <ArticleUnorderedListItem>pasive exercises</ArticleUnorderedListItem>
    </ArticleUnorderedList>
    <ArticleParagraph>
      Let&apos;s start with the active ones. As proven above, the key to success is repeating after
      native speakers. To do this at home you&apos;ll need only two things: an English version of a
      book you like and its audiobook read by a British native speaker (both are easy to be found
      for free online). What you&apos;ll want to do is to read aloud from the book repeating after
      the speaker. Let them read the sentence first, listen closely to how they pronounce every
      single word and then pause the audiobook to repeat aloud, reading exactly the same sentence
      from the book. What you must pay attention to is to mimic the accent as closely as possible.
      For this reason, the repeated parts shouldn&apos;t consist of more than 10 words, so you can
      correctly remember they way the speaker pronounced the words. If a sentence is too long, split
      it to smaller parts. I suggest doing this exercise everyday for 30 minutes to achieve
      satisfying results.
    </ArticleParagraph>
    <ArticleParagraph>
      Active exercises are the ones that bring the best results, but they could be even better if
      you decide to introduce passive ones to your daily routine. Passive exercises base on one
      simple rule: listening to the language as often as possible. This means that you should be
      surrounded by the spoken English all the time. It can be audiobooks, podcasts, YouTube videos
      or anything else where you&apos;ll be able to hear native speakers talking. You can listen
      while eating, training, driving a car or whenever possible. Do you know what&apos;s the best
      part of this excercise? There is no need for you to pay attention to what they say. It&apos;s
      completely enough for it to play in the background, allowing your brain subconsciously get
      used to and learn the pronunciation. Just play the audio and focus on whatever else you want.
      There&apos;s no time limit for this exercise. The more, the better.
    </ArticleParagraph>
    <ArticleSubHeader>Summary</ArticleSubHeader>
    <ArticleParagraph>
      Now you know what to do to learn British accent at home. If you dedicate enough time to both
      described exercises, you&apos;ll be surprised by the quality of the results very soon.
      What&apos;s even better is that the accent won&apos;t be the only outcome. Following the
      instructions you&apos;ll notice that your vocabulary and grammar will also improve.
    </ArticleParagraph>
    <ArticleParagraph>
      Enough reading for now. It&apos;s time to find the book and its audiobook and start
      practicing. Good luck!
    </ArticleParagraph>
  </ArticleWrapper>
);
