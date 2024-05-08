import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: string[] = [
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. - Malcolm X",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "It is the mark of an educated mind to be able to entertain a thought without accepting it. - Aristotle",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The beautiful thing about learning is that no one can take it away from you. - B.B. King",
    "Knowledge is power, but enthusiasm pulls the switch. - Ivern Ball",
    "An investment in knowledge pays the best interest. - Benjamin Franklin",
    "The only source of knowledge is experience. - Albert Einstein",
    "Intelligence is the ability to adapt to change. - Stephen Hawking",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Learning never exhausts the mind. - Leonardo da Vinci",
    "The mind is not a vessel to be filled, but a fire to be kindled. - Plutarch",
    "The more that you read, the more things you will know. The more that you learn, the more places you'll go. - Dr. Seuss",
    "Education is not the filling of a pail, but the lighting of a fire. - William Butler Yeats",
    "Change is the end result of all true learning. - Leo Buscaglia",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Education is not preparation for life; education is life itself. - John Dewey",
    "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
    "Knowledge is the key to unlocking the golden door of freedom. - George Washington Carver",
    "Wisdom begins in wonder. - Socrates",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Education is not a problem. Education is an opportunity. - Lyndon B. Johnson",
    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. - Malcolm X",
    "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice. - Brian Herbert",
    "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
    "The beautiful thing about learning is that no one can take it away from you. - B.B. King",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The mind is not a vessel to be filled, but a fire to be kindled. - Plutarch",
    "Change is the end result of all true learning. - Leo Buscaglia",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Education is not preparation for life; education is life itself. - John Dewey",
    "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
    "Knowledge is the key to unlocking the golden door of freedom. - George Washington Carver",
    "Wisdom begins in wonder. - Socrates",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Education is not a problem. Education is an opportunity. - Lyndon B. Johnson",
    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. - Malcolm X",
    "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice. - Brian Herbert"
  ];
  

  currentQuoteIndex: number = 0;
  currentQuote: string = '';

  ngOnInit() {
    this.displayNextQuote();
  }

  displayNextQuote() {
    this.currentQuote = this.quotes[this.currentQuoteIndex];
    this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.quotes.length;
    setTimeout(() => {
      this.displayNextQuote();
    }, 5000); // Change this value to adjust the interval between quotes (in milliseconds)
  }
}
