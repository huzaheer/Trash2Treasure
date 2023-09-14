import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/About.css'

function About() {
  return (
    <div class="about">
        <h1> What is T2T? </h1>
        <p class="text"> 
        Trash2Treasure (T2T) is a student-led initiative intended to incentivize waste reduction and enrich recycling efforts 
        within Duke University’s West Campus dormitories. T2T encourages individuals to actively participate in Duke’s sustainability 
        initiatives by offering small incentives as rewards for the dorms (and residents) who are the most successful in achieving 
        their environmental goals. T2T is operated through this webpage, which, along with a fully-functioning database and API, was 
        created fully from scratch by our team. 
        </p>
        <h1> Who Cares? </h1>
        <p class="text">
        As Duke students, we have observed a large majority of students neglecting to separate their trash into landfill waste and 
        recyclables, with many simply throwing everything, recyclable or not, into their garbage bins. To be perfectly honest, we at 
        the T2T team are also guilty of this offense and we understand the convenience of throwing everything into a single bin, 
        especially during exam weeks and other particularly stressful times. We believe there is simply not enough incentive and 
        motivation behind the effort of separating your recyclables, and thus, we decided to launch Trash2Treasure in order to encourage 
        students to participate in a worthy cause. 
        </p>
        <h1> How Does it Work? </h1>
        <p class="text">
        The idea behind Trash2Treasure is simple. Every two weeks, beginning on Monday, students are able to log how many bottles, cans, 
        and cardboard containers they are recycling in order to gain points for themselves according to the following formula:
        </p>
        <p class="text">
        For every cardboard container recycled, students gain one point, while for every aluminum can or bottle recycled, students 
        gain two points. This scaling is based on the fact that cans and bottles are non-biodegradable and exist in very high numbers, 
        making the need to recycle them even more urgent. 
        </p>
        <p class="text">
        At the end of every two week period, on Sunday, each dormitory on West Campus (including Hollows) has the total points of all of 
        its residents calculated. At any given time, each dorm’s total points and the individual point leaders across all dorms will 
        displayed on this website through a real-time leaderboard under the <Link to="/leaderboard"><b class="link">Leaderboard</b></Link> tab. 
        Because each dorm has a varying number of residents, these dorm totals are divided by the number of residents in order to enforce collective 
        responsibility and provide each dorm with a fair shot at winning. The dorm at the end of the two week period with the highest points-per-resident 
        number wins, and each resident in the winning dorm gets to keep their points from the past two weeks. Unfortunately, this means residents of the dorms 
        who did not win lose all of their points from the past two weeks. 
        </p>
        <p class="text">
        But what do these points do? On these Sundays, the <Link to="/rewards"><b class="link">Rewards</b></Link> tab is opened, and users can redeem their points for small prizes 
        such as moderate food point bonuses (which are always in high demand) and coupons/gift cards for various Duke stores. 
        If you don’t spend all of your points, don’t worry; these points are safe and will not be erased if you lose in the next two weeks. 
        These modest, yet enticing prizes will hopefully inspire students to be more active in their recycling efforts and, if implemented, 
        may lead to greater environmental change across Duke. 
        </p>
        <h1>What's Next for T2T?</h1>
        <p class="text">
          The current iteration of Trash2Treasure is merely a beginning, and our team has plenty of ideas and considerations for the 
          future of our webpage and its associated sustainability initiative. Due to time restrictions, we have been unable to 
          implement <Link to="/login"><b class="link">Duke NetID Login</b></Link> into our website yet, but this seems to be the next logical step in the development of T2T. Two more important aspects which 
          are crucial to T2T’s functionality are verification and punitive measures. We have considered using weighted trash bins in the 
          trash rooms as well as a photo verification system, but none have been finalized yet. Finally, because T2T is currently optimized 
          to cover West Campus, which is where most of our team members live, it would only make sense that we one day extend T2T to East 
          Campus and potentially Swift Apartments. 
        </p>
        <h1>Last Words:</h1>
        <p class="text">
          Together, we can turn trash into treasure, one can or bottle at a time. Good luck, and happy treasure hunting! 
        </p>
        <p class="quote">
          - Jason, Humza, Raul, and Ethan, the T2T team
        </p>
    </div>
  )
}

export default About