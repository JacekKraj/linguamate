import { ArticleImage } from '@/components/articles/articleImage/ArticleImage';
import { ArticleItalicPhrase } from '@/components/articles/articleItalicPhrase/ArticleItalicPhrase';
import { ArticleParagraph } from '@/components/articles/articleParagraph/ArticleParagraph';
import { ArticleParagraphLink } from '@/components/articles/articleParagraphLink/ArticleParagraphLink';
import { ArticleSubHeader } from '@/components/articles/articleSubHeader/ArticleSubHeader';
import { ArticleUnorderedList } from '@/components/articles/articleUnorderedList/ArticleUnorderedList';
import { ArticleUnorderedListItem } from '@/components/articles/articleUnorderedList/ArticleUnorderedListItem';
import { ArticleWrapper } from '@/components/articles/articleWrapper/ArticleWrapper';
import { PageHeader } from '@/components/common/pageHeader/PageHeader';
import { ArticleNames, articlesData, ArticleURLS } from '@/utils/articleData/articles';

export const FearOfSpeakingArticle = () => {
  const article = articlesData[ArticleURLS.FEAR_OF_SPEAKING];

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
        If English isn&apos;t your native language, the fear of speaking it may be a very familiar
        feeling. However, you&apos;re not alone. A significant percentage of people report
        experiencing at least some discomfort when speaking a foreign language. The most commonly
        recommended solution to this issue is to engage in more real conversations. Unfortunately,
        this isn&apos;t an option for everyone. In this article, you&apos;ll find alternative
        approaches to overcoming the fear of speaking English, with a few home exercises. But first,
        we need to understand why we&apos;re afraid to speak English in the first place.
      </ArticleParagraph>
      <ArticleImage
        src="/images/articles/fearOfSpeaking.webp"
        alt="Man afraid of speaking English"
      />
      <ArticleSubHeader>Why are we afraid of speaking English?</ArticleSubHeader>
      <ArticleParagraph>
        Fear of doing something is generally a natural reaction to the unknown, which, in other
        words, stems from a lack of experience. The biggest challenge we face when speaking English,
        or any foreign language, is the dynamics of conversation. Real conversations are fast and
        unpredictable. This means you can&apos;t always prepare and think ahead about what you want
        to say, as it depends on what your conversation partner says. You also need to respond
        quickly to keep the flow going, leaving you little time to think about your answer. As the
        conversation progresses, we often start to feel more uncomfortable, realizing we can&apos;t
        keep up with the pace.
      </ArticleParagraph>
      <ArticleParagraph>
        When it comes to speaking English, in addition to the pressure from the pace of
        conversation, there are other factors that can amplify this fear. These factors are related
        to how confident you feel in different areas of the language. These areas include:
      </ArticleParagraph>
      <ArticleUnorderedList>
        <ArticleUnorderedListItem>grammar</ArticleUnorderedListItem>
        <ArticleUnorderedListItem>pronunciation and accent</ArticleUnorderedListItem>
        <ArticleUnorderedListItem>vocabulary</ArticleUnorderedListItem>
        <ArticleUnorderedListItem>fluency of speech</ArticleUnorderedListItem>
        <ArticleUnorderedListItem>naturalness in conversation</ArticleUnorderedListItem>
      </ArticleUnorderedList>
      <ArticleParagraph>
        If you don&apos;t feel confident in the areas described above, it might be difficult for you
        to ever feel comfortable speaking English with others, even if you practice a lot. However,
        feeling confident doesn&apos;t mean being perfect or knowing everything. It means being good
        enough so you don&apos;t have to worry about forgetting a word, because you know you can
        easily explain it in another way.
      </ArticleParagraph>
      <ArticleParagraph>
        Before moving on to the simple home exercises described in the next section of this article,
        you need to ensure that you feel comfortable with the areas listed above. To achieve this,
        you may find some of our other articles helpful, such as{' '}
        <ArticleParagraphLink href={ArticleURLS.BRITISH_ACCENT}>
          {ArticleNames.BRITISH_ACCENT}
        </ArticleParagraphLink>{' '}
        or{' '}
        <ArticleParagraphLink href={ArticleURLS.MISTAKES_IN_LEARNING}>
          {ArticleNames.MISTAKES_IN_LEARNING}
        </ArticleParagraphLink>
        .
      </ArticleParagraph>
      <ArticleSubHeader>How to overcome fear of speaking English at home?</ArticleSubHeader>
      <ArticleParagraph>
        As mentioned earlier, the discomfort we feel while speaking is less about the fear of
        talking to others and more about the unpredictability and pace of the conversation. This
        means the best way to overcome this fear is to expose yourself to this unpredictability and
        pace regularly. Fortunately, this can be achieved at home.
      </ArticleParagraph>
      <ArticleSubHeader tag="h3">Exercise 1: try translating books</ArticleSubHeader>
      <ArticleParagraph>
        For this exercise, you&apos;ll need a book in both your native language and English. For
        most popular books, you can easily find free PDF versions online. What you&apos;ll want to
        do is read one sentence at a time from the native language version and try to translate it
        into English, speaking aloud. This will introduce the unpredictability we discussed earlier.
        You won&apos;t know what to expect until you read the sentence, and you can&apos;t prepare
        ahead of time. Only after reading the sentence will you know what you want to say in your
        native language, and you&apos;ll need to act quickly to translate it into English. This
        mimics what happens in a real conversation. For this reason, try not to stop and think for
        too long; instead, respond right away, even if the response isn&apos;t grammatically
        perfect. If you struggle too much with a particular sentence, after giving it a try, you can
        check the correct translation in the English version of the book.
      </ArticleParagraph>
      <ArticleParagraph>
        To make this exercise effective, you should try to do it for about 30 minutes a day. When
        you feel you&apos;re getting better and it&apos;s no longer challenging, you should move on
        to Exercise 2.
      </ArticleParagraph>
      <ArticleSubHeader tag="h3">
        Exercise 2: imagine you&apos;re acting in a video or podcast
      </ArticleSubHeader>
      <ArticleParagraph>
        Compared to Exercise 1, this one is even more challenging. For this exercise, you&apos;ll
        need an English-speaking video or podcast, which can easily be found for free on platforms
        like YouTube. The content should feature a conversation between two people, discussing any
        topic you like. What you&apos;ll do is essentially replace one of the speakers. Listen to
        one person, and when it&apos;s time for the other person to respond, pause the video and try
        to respond yourself.
      </ArticleParagraph>
      <ArticleParagraph>
        As you&apos;ll notice, compared to the previous exercise, in this case, you won&apos;t know
        what to say in advance. You&apos;ll need to come up with the response yourself, which makes
        it even more of a real-life scenario. You really have to imagine you&apos;re talking with
        the person in the video or podcast. Once you&apos;re done with your response, unpause the
        video and let the real speaker respond. Then pause it again and repeat the process.
      </ArticleParagraph>
      <ArticleParagraph>
        You must remember that it&apos;s important to make your response sound natural. If it&apos;s
        supposed to be something short, like{' '}
        <ArticleItalicPhrase>&quot;yes&quot;</ArticleItalicPhrase> or{' '}
        <ArticleItalicPhrase>&quot;I don&apos;t think so&quot;</ArticleItalicPhrase> don&apos;t try
        to make it unnecessarily long or complicated. On the other hand, if the context of the
        conversation calls for a longer response, go ahead and provide it. As mentioned earlier, you
        need to imagine that you&apos;re part of a real conversation. You should repeat this
        exercise for 30 minutes a day until you no longer feel the fear of speaking English during
        real conversations.
      </ArticleParagraph>
      <ArticleSubHeader>Summary</ArticleSubHeader>
      <ArticleParagraph>
        The exercises described above are designed to help you overcome the fear of speaking
        English. If you practice regularly, even these simple home exercises can help you completely
        eliminate this fear within just a few months. Good luck!
      </ArticleParagraph>
    </ArticleWrapper>
  );
};
