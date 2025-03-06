import { ArticleImage } from '@/components/articles/articleImage/ArticleImage';
import { ArticleItalicPhrase } from '@/components/articles/articleItalicPhrase/ArticleItalicPhrase';
import { ArticleParagraph } from '@/components/articles/articleParagraph/ArticleParagraph';
import { ArticleParagraphLink } from '@/components/articles/articleParagraphLink/ArticleParagraphLink';
import { ArticleSubHeader } from '@/components/articles/articleSubHeader/ArticleSubHeader';
import { ArticleUnorderedList } from '@/components/articles/articleUnorderedList/ArticleUnorderedList';
import { ArticleUnorderedListItem } from '@/components/articles/articleUnorderedList/ArticleUnorderedListItem';
import { ArticleWrapper } from '@/components/articles/articleWrapper/ArticleWrapper';
import { PageHeader } from '@/components/common/pageHeader/PageHeader';
import { articlesData, ArticleURLS } from '@/utils/articleData/articles';

export const MistakesInLearningArticle = () => {
  const article = articlesData[ArticleURLS.MISTAKES_IN_LEARNING];

  return (
    <ArticleWrapper>
      <PageHeader
        articleData={{
          publicationTimestamp: article.publicationTimestamp,
          minsRead: article.minsRead,
        }}
      >
        {article.name}
      </PageHeader>
      <ArticleParagraph>
        There are several common mistakes people make in learning a language. Some of these slow
        down the learning process, while others decrease the quality of the language. The problem is
        that many of these mistakes are often disguised within popular exercises that we all tend to
        do.
      </ArticleParagraph>
      <ArticleImage
        src="/images/articles/commonMistakes.webp"
        alt="Common mistakes in learning languages"
      />
      <ArticleSubHeader>
        Why are the most common approaches to learning languages mostly wrong?
      </ArticleSubHeader>
      <ArticleParagraph>
        The answer to this question is simple: just because someone speaks a language doesn&apos;t
        necessarily mean they know how to teach it. It only means they know how to speak it. Foreign
        language teachers can be divided into two categories:
      </ArticleParagraph>
      <ArticleUnorderedList>
        <ArticleUnorderedListItem>native speakers</ArticleUnorderedListItem>
        <ArticleUnorderedListItem>non-native speakers</ArticleUnorderedListItem>
      </ArticleUnorderedList>
      <ArticleParagraph>
        Let&apos;s focus on native speakers first. While their language skills are undoubtedly
        perfect, there&apos;s one major issue: they&apos;ve never experienced the process of
        learning their mother tongue as an adult. They just know it ever since they can remember.
        While they can obviously help you with grammar or pronunciation, they don&apos;t have a deep
        understanding of the learning process itself, because they never went through it as adults.
      </ArticleParagraph>
      <ArticleParagraph>
        Non-native speakers, on the other hand, have gone through the process of learning a language
        themselves. Their language skills may not be as high as those of native speakers, but
        they&apos;re usually quite decent. This means they&apos;re likely familiar with the best
        practices that would help you achieve your language-learning goals. However, let&apos;s
        consider the process in which they&apos;ve been able to learn the language. First, they
        spent around 12 years in basic education, and then likely another 5 years in specialized
        language studies at university. If you have 17 years to spare, you might want to give it a
        try. If not, here are the common mistakes to watch out for in order to learn a language more
        quickly.
      </ArticleParagraph>
      <ArticleSubHeader>Mistake 1: focusing on grammar exercises</ArticleSubHeader>
      <ArticleParagraph>
        The core of most popular language courses is grammar. It&apos;s no surprise that it can take
        someone over 10 years to learn a language if they focus so much on learning by heart how to
        construct sentences for every grammatical case. However, there is an alternative.
      </ArticleParagraph>
      <ArticleParagraph>
        What you really want to achieve is to develop a kind of subconscious language instinct or
        intuition. Since this instinct is meant to be subconscious, it&apos;s definitely not
        something you should learn by heart. This is exactly the case of your native language.
        Often, you can&apos;t explain the grammar rule behind a sentence you&apos;ve just spoken -
        you just know it&apos;s correct because that&apos;s what your instinct tells you.
      </ArticleParagraph>
      <ArticleSubHeader tag="h3">How to build subconscious language instinct?</ArticleSubHeader>
      <ArticleParagraph>
        To build a subconscious language instinct, your brain needs a constant stream of input in
        the target language. This can be achieved in two ways: actively and passively. Active
        learning involves things like watching a movie with dubbing or reading a book - your brain
        is actively making connections and drawing conclusions. Passive learning, on the other hand,
        happens when your brain absorbs information unconsciously. This can occur when you switch
        your phone&apos;s language or play a podcast in the background while you&apos;re making
        dinner.
      </ArticleParagraph>
      <ArticleParagraph>
        Pasive ones might actually be even more important. Have you ever noticed how quickly you
        learn the lyrics to your favorite songs, just by listening to them? Of course language is
        not a song, it&apos;s something much more complex. But the rule stil applies. What matters
        here is of course the frequency. You must make sure your brain is constantly stiumulated.
        For more information about active and passive learning methods, check out the previous
        article about{' '}
        <ArticleParagraphLink href={ArticleURLS.BRITISH_ACCENT}>
          learning british accent at home
        </ArticleParagraphLink>
        .
      </ArticleParagraph>
      <ArticleSubHeader>Mistake 2: falling into a trap of direct translations</ArticleSubHeader>
      <ArticleParagraph>
        Many people believe that speaking a foreign language is simply about translating their
        native language thoughts into the language. They couldn&apos;t be more wrong. And this
        doesn&apos;t just apply to translating popular sayings or idioms. There are two main areas
        where direct translations fail:
      </ArticleParagraph>
      <ArticleUnorderedList>
        <ArticleUnorderedListItem>short phrases</ArticleUnorderedListItem>
        <ArticleUnorderedListItem>word order</ArticleUnorderedListItem>
      </ArticleUnorderedList>
      <ArticleParagraph>
        When it comes to short phrases, the problem often lies in how certain words are understood
        in a given language. Let&apos;s look at an example. In english it&apos;s common to say
        someone <ArticleItalicPhrase>&quot;pays attention&quot;</ArticleItalicPhrase> to something.
        In Italian, to express the same idea, they say
        <ArticleItalicPhrase> &quot;prestare attenzione&quot;</ArticleItalicPhrase>. The problem is
        that English meaning of verb <ArticleItalicPhrase>&quot;prestare&quot;</ArticleItalicPhrase>{' '}
        isn&apos;t
        <ArticleItalicPhrase> &quot;to give&quot;</ArticleItalicPhrase> but
        <ArticleItalicPhrase> &quot;to lend&quot;</ArticleItalicPhrase>. If someone would try to
        directly translate their Italian thoughts to English, they would say
        <ArticleItalicPhrase> &quot;lend attention&quot;</ArticleItalicPhrase> which is obviously
        incorrect.
      </ArticleParagraph>
      <ArticleParagraph>
        In addition to short phrases, it&apos;s also common for people to translate the word order
        from their native language. This is incorrect, as different languages place verbs, nouns,
        and adjectives in different positions within a sentence. Let&apos;s look at an example. In
        Italian one might say
        <ArticleItalicPhrase> &quot;sono andato ieri al mercato&quot;</ArticleItalicPhrase>. If
        someone tried to directly translate this sentence to english, maintaing the word order, they
        would say{' '}
        <ArticleItalicPhrase>&quot;i went yesterday to the market&quot;</ArticleItalicPhrase> which
        isn&apos;t the correct placement for the word{' '}
        <ArticleItalicPhrase>&quot;yesterday&quot;</ArticleItalicPhrase> in the sentence. While this
        type of mistake won&apos;t make your sentence incorrect, it will make it sound strange and
        unnatural.
      </ArticleParagraph>
      <ArticleParagraph>
        Unfortunately, direct translations are a natural thing to do. We all focus on grammar, often
        forgetting about the correct word order. To minimize the impact of this issue, the best
        thing you can do is stop thinking in your native language while speaking a foreign one. This
        ensures that no translation process happens between your brain and your mouth. Instead, you
        should go with the flow of the conversation and let your brain automatically create the
        structure by repeating phrases you&apos;ve already heard.
      </ArticleParagraph>
      <ArticleSubHeader>Summary</ArticleSubHeader>
      <ArticleParagraph>
        Have you made any of these mistakes in the past? If so, don&apos;t worry. From today, you
        know what to change in your language learning process. Keep your brain properly stimulated,
        and the results will come soon. Good luck!
      </ArticleParagraph>
    </ArticleWrapper>
  );
};
