import { ArticleImage } from '@/components/articles/articleImage/ArticleImage';
import { ArticleItalicPhrase } from '@/components/articles/articleItalicPhrase/ArticleItalicPhrase';
import { ArticleParagraph } from '@/components/articles/articleParagraph/ArticleParagraph';
import { ArticleSubHeader } from '@/components/articles/articleSubHeader/ArticleSubHeader';
import { ArticleUnorderedList } from '@/components/articles/articleUnorderedList/ArticleUnorderedList';
import { ArticleUnorderedListItem } from '@/components/articles/articleUnorderedList/ArticleUnorderedListItem';
import { ArticleWrapper } from '@/components/articles/articleWrapper/ArticleWrapper';
import { PageHeader } from '@/components/common/pageHeader/PageHeader';
import { articlesData, ArticleURLS } from '@/utils/articleData/articles';

export const ImproveSpellingArticle = () => {
  const article = articlesData[ArticleURLS.IMPROVE_SPELLING];

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
        Having difficulty with spelling is a common issue for both adults and children. While some
        may find it embarrassing, this problem is not related to intelligence. Many people try to
        solve it by focusing on learning grammar rules, especially when it comes to foreign
        languages. However, this approach may not be the most effective solution.
      </ArticleParagraph>
      <ArticleImage
        src="/images/articles/improveSpelling.webp"
        alt="How to improve your spelling"
      />
      <ArticleSubHeader>
        Why isn’t it effective to learn grammar rules to improve your spelling?
      </ArticleSubHeader>
      <ArticleParagraph>
        It turns out that, in most cases, everyone has their own set of words they commonly
        misspell. While there are certain words that cause trouble for many of us, these are usually
        related to grammatical exceptions. Aside from that, each person has their own unique set of
        misspelled words that aren&apos;t linked to any particular grammar rule. These words often
        don&apos;t have anything in common in a grammatical sense. People simply tend to forget the
        correct spelling, even after checking it multiple times. For this reason, learning grammar
        rules alone won’t help. Fortunately, there are a few methods you can use at home that are
        more effective than focusing on grammar rules. These include:
      </ArticleParagraph>
      <ArticleUnorderedList>
        <ArticleUnorderedListItem>turn off autocorrect on your phone</ArticleUnorderedListItem>
        <ArticleUnorderedListItem>
          use misspelled words as often as possible
        </ArticleUnorderedListItem>
        <ArticleUnorderedListItem>
          regularly prepare and review a list of your most commonly misspelled words.
        </ArticleUnorderedListItem>
        <ArticleUnorderedListItem>
          choose between different spelling variations from various countries
        </ArticleUnorderedListItem>
        <ArticleUnorderedListItem>avoid learning languages through songs</ArticleUnorderedListItem>
      </ArticleUnorderedList>
      <ArticleSubHeader>Why doesn’t autocorrect on your phone help?</ArticleSubHeader>
      <ArticleParagraph>
        If there were only one factor that definitely has no positive impact on your spelling
        skills, it would be autocorrect on your phone. This is because, nowadays, people tend to
        write less by hand and instead rely on their computers or cell phones tin case of a need to
        prepare any form of text. And this is where the problem begins. In the past, people had to
        remember the correct spelling because there was nothing to do it for them. Today, all we
        have to do on our phones is type a few letters of a word (without paying attention to
        spelling or letter order), and autocorrect will take care of the rest. While this feature
        speeds up typing, it also prevents us from thinking and remembering the correct spelling.
      </ArticleParagraph>
      <ArticleParagraph>
        To overcome this situation, you should definitely turn off the autocorrect feature. Instead,
        enable the misspelling tracker. It will highlight incorrectly written words to catch your
        attention when you make a mistake. This will automatically stimulate your brain, and each
        time a word is highlighted, your brain will receive the correct signal until you stop making
        the same mistake.
      </ArticleParagraph>
      <ArticleSubHeader>Try to use problematic words more frequently</ArticleSubHeader>
      <ArticleParagraph>
        One problem with the approach described in the previous paragraph is that some misspelled
        words aren’t used frequently enough in daily conversations. As a result, the signals sent to
        your brain may be too rare for it to remember the correct spelling.
      </ArticleParagraph>
      <ArticleParagraph>
        To overcome the frequency issue, it’s recommended to try increasing the usage of misspelled
        words while writing. Of course, this doesn’t mean you should take a pen and write the word
        over and over again on a piece of paper. Instead, look for opportunities to use it more in
        your daily written conversations, allowing your phone to highlight any mistakes and
        reinforce the signals sent to your brain. After some time, when you notice that a particular
        word no longer causes trouble, you can forget about it and focus on another one that is
        still problematic.
      </ArticleParagraph>
      <ArticleSubHeader>
        It’s important to have a list of commonly misspelled words
      </ArticleSubHeader>
      <ArticleParagraph>
        The idea of having a simple list of words might sound a bit silly and old-fashioned to you.
        However, the goal of this list is slightly different from what you might think, because
        you’re NEVER supposed to memorize the words. That would require unnecessary effort. The
        list, where you should add all the words you have trouble with, should only be read once a
        day for an extended period. In the beginning, you may feel like reading isn’t enough and
        that you’re not remembering anything. This feeling will fade over time because, as you
        continue reading, your brain will create the same connections as if you were memorizing
        them. What’s even better is that these connections will be much deeper than if you tried to
        memorize the words, because the exposure time will be longer. There is one condition,
        though: you must really read the words, not just glance at them. Pay attention to each word
        and try to notice where you tend to make a mistake.
      </ArticleParagraph>
      <ArticleParagraph>
        The list of words should be updated regularly. You don’t need to write them all down at
        once; you can add new words each time you notice a word is problematic for you. You can also
        remove words that have been on the list for a long time and that you’re 100% sure will never
        be a problem again.
      </ArticleParagraph>
      <ArticleSubHeader>Choose between different spelling variations</ArticleSubHeader>
      <ArticleParagraph>
        Some spelling problems may arise from the fact that some languages are used in more than one
        country. Even though their general structure is similar, certain details may have changed
        over time. This is the case with, for example, American and British English or Colombian and
        Spanish. Such differences can be confusing, especially if you’re not aware of them. If the
        language you&apos;re struggling with isn’t your native one, you should make sure to check in
        which countries it’s actually used.
      </ArticleParagraph>
      <ArticleParagraph>
        When you find out which version of the language you’ll be using, you should choose only one
        and stick to it. For example, if you&apos;re learning English, decide whether you want to
        follow the American or British style. Otherwise, you’ll constantly be confused when deciding
        whether to use <ArticleItalicPhrase>&quot;color&quot;</ArticleItalicPhrase> or
        <ArticleItalicPhrase>&quot;colour&quot;</ArticleItalicPhrase> or{' '}
        <ArticleItalicPhrase>&quot;center&quot;</ArticleItalicPhrase> or{' '}
        <ArticleItalicPhrase>&quot;centre&quot;</ArticleItalicPhrase>. It’s also highly recommended
        to choose a dictionary (if you use one) that matches the version of the language you’ve
        chosen. In general, you should try to eliminate any potential sources of confusion.
      </ArticleParagraph>
      <ArticleSubHeader>Song lyrics are never a good way to learn!</ArticleSubHeader>
      <ArticleParagraph>
        This advice is especially for those learning foreign languages. While many learners start
        listening to music in the target language, although it’s not a bad idea for general language
        exposure, it certainly doesn’t help with spelling. This is because songwriters often use
        incorrect language structures to fit the lyrics to the melody. They frequently use shortcuts
        and simplified forms that can be misleading for learners still in the process of mastering
        the language. For this reason, you should always choose language sources that are confirmed
        to be grammatically correct, like books or newspapers.
      </ArticleParagraph>
      <ArticleSubHeader>Summary</ArticleSubHeader>
      <ArticleParagraph>
        The 5 methods described above are typically the most impactful for improving your spelling
        skills. Of course, there are many other methods, but these are the most effective and
        easiest to implement. No matter which method you choose, it&apos;s important to remember
        that consistency and patience are key. If you meet these conditions, the results will surely
        come. Good luck!
      </ArticleParagraph>
    </ArticleWrapper>
  );
};
