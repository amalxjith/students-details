import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, FormControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';
import { SideBarComponent } from './side-bar/side-bar.component';
interface Student {
    name: string;
    city: string;
    studentImage: string;
    state: string;
    country: string;
    physics: string;
    chemistry: string;
    maths: string;
    computer: string;
}
@Component({
    selector: 'students-details-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet,FormsModule, ReactiveFormsModule,NgbHighlight, SideBarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent {
    title = 'student-details';
    filter: FormControl;

    sidebarExpanded:boolean = true;

    students: Array<Student> = [
        {
            name:'John Doe',
            city:'Dublin',
            studentImage:'https://avatar.iran.liara.run/public/1',
            state:'BN',
            country:'Ireland',
            physics:'26',
            chemistry:'22',
            maths:'30',
            computer:'29'
        },
        {
            name:'Peter Neil',
            city:'South Hill',
            studentImage:'https://avatar.iran.liara.run/public/2',
            state:'MD',
            country:'Sao Tome and Principe',
            physics:'0',
            chemistry:'23',
            maths:'23',
            computer:'23'
        },
        {
            name:'Peter Zulauf',
            city:'Chicago',
            studentImage:'https://avatar.iran.liara.run/public/3',
            state:'MA',
            country:'Netherlands',
            physics:'2',
            chemistry:'17',
            maths:'19',
            computer:'8'
        },
        {
            name:'Sally Mackenzie',
            city:'Boca Raton',
            studentImage:'https://avatar.iran.liara.run/public/4',
            state:'VT',
            country:'Mexico',
            physics:'21',
            chemistry:'5',
            maths:'25',
            computer:'13'
        },
        {
            name:'Gregg paucek',
            city:'Cristopherview',
            studentImage:'https://avatar.iran.liara.run/public/5',
            state:'NJ',
            country:'Bhutan',
            physics:'21',
            chemistry:'14',
            maths:'2',
            computer:'10'
        },
        {
            name: 'Alice Brown',
            city: 'New York',
            studentImage: 'https://avatar.iran.liara.run/public/6',
            state: 'NY',
            country: 'Italy',
            physics: '20',
            chemistry: '25',
            maths: '28',
            computer: '30'
        },
        {
            name: 'Bob Smith',
            city: 'Los Angeles',
            studentImage: 'https://avatar.iran.liara.run/public/7',
            state: 'CA',
            country: 'Italy',
            physics: '15',
            chemistry: '20',
            maths: '22',
            computer: '27'
        },
        {
            name: 'Charlie Davis',
            city: 'Houston',
            studentImage: 'https://avatar.iran.liara.run/public/8',
            state: 'TX',
            country: 'USA',
            physics: '18',
            chemistry: '24',
            maths: '26',
            computer: '29'
        },
        {
            name: 'Diana Evans',
            city: 'Phoenix',
            studentImage: 'https://avatar.iran.liara.run/public/9',
            state: 'AZ',
            country: 'Germany',
            physics: '22',
            chemistry: '26',
            maths: '30',
            computer: '28'
        },
        {
            name: 'Ethan Foster',
            city: 'Philadelphia',
            studentImage: 'https://avatar.iran.liara.run/public/10',
            state: 'PA',
            country: 'Germany',
            physics: '19',
            chemistry: '23',
            maths: '25',
            computer: '26'
        },
        {
            name: 'Fiona Green',
            city: 'San Antonio',
            studentImage: 'https://avatar.iran.liara.run/public/11',
            state: 'TX',
            country: 'Germany',
            physics: '21',
            chemistry: '27',
            maths: '28',
            computer: '29'
        },
        {
            name: 'George Harris',
            city: 'San Diego',
            studentImage: 'https://avatar.iran.liara.run/public/26',
            state: 'CA',
            country: 'England',
            physics: '16',
            chemistry: '22',
            maths: '24',
            computer: '25'
        },
        {
            name: 'Hannah Jackson',
            city: 'Dallas',
            studentImage: 'https://avatar.iran.liara.run/public/32',
            state: 'TX',
            country: 'Germany',
            physics: '18',
            chemistry: '25',
            maths: '27',
            computer: '30'
        },
        {
            name: 'Ian Kelly',
            city: 'San Jose',
            studentImage: 'https://avatar.iran.liara.run/public/12',
            state: 'CA',
            country: 'New Zeland',
            physics: '20',
            chemistry: '24',
            maths: '26',
            computer: '29'
        },
        {
            name: 'Julia Lewis',
            city: 'Austin',
            studentImage: 'https://avatar.iran.liara.run/public/13',
            state: 'TX',
            country: 'Australia',
            physics: '19',
            chemistry: '23',
            maths: '25',
            computer: '27'
        },
        {
            name: 'Kevin Martin',
            city: 'Jacksonville',
            studentImage: 'https://avatar.iran.liara.run/public/14',
            state: 'FL',
            country: 'Bhutan',
            physics: '15',
            chemistry: '20',
            maths: '22',
            computer: '26'
        },
        {
            name: 'Laura Nelson',
            city: 'Fort Worth',
            studentImage: 'https://avatar.iran.liara.run/public/15',
            state: 'TX',
            country: 'Australia',
            physics: '22',
            chemistry: '27',
            maths: '29',
            computer: '30'
        },
        {
            name: "Michael O'Brien",
            city: 'Columbus',
            studentImage: 'https://avatar.iran.liara.run/public/16',
            state: 'OH',
            country: 'Australia',
            physics: '18',
            chemistry: '23',
            maths: '25',
            computer: '28'
        },
        {
            name: 'Nina Parker',
            city: 'Charlotte',
            studentImage: 'https://avatar.iran.liara.run/public/17',
            state: 'NC',
            country: 'India',
            physics: '20',
            chemistry: '26',
            maths: '27',
            computer: '30'
        },
        {
            name: 'Oscar Quinn',
            city: 'San Francisco',
            studentImage: 'https://avatar.iran.liara.run/public/18',
            state: 'CA',
            country: 'India',
            physics: '16',
            chemistry: '21',
            maths: '24',
            computer: '26'
        },
        {
            name: 'Paula Roberts',
            city: 'Indianapolis',
            studentImage: 'https://avatar.iran.liara.run/public/19',
            state: 'IN',
            country: 'England',
            physics: '21',
            chemistry: '25',
            maths: '28',
            computer: '30'
        },
        {
            name: 'Quentin Scott',
            city: 'Seattle',
            studentImage: 'https://avatar.iran.liara.run/public/20',
            state: 'WA',
            country: 'USA',
            physics: '19',
            chemistry: '24',
            maths: '27',
            computer: '29'
        },
        {
            name: 'Rachel Thomas',
            city: 'Denver',
            studentImage: 'https://avatar.iran.liara.run/public/21',
            state: 'CO',
            country: 'France',
            physics: '17',
            chemistry: '22',
            maths: '25',
            computer: '28'
        },
        {
            name: 'Steven Underwood',
            city: 'Washington',
            studentImage: 'https://avatar.iran.liara.run/public/22',
            state: 'DC',
            country: 'France',
            physics: '15',
            chemistry: '20',
            maths: '23',
            computer: '25'
        },
        {
            name: 'Tina Vincent',
            city: 'Boston',
            studentImage: 'https://avatar.iran.liara.run/public/23',
            state: 'MA',
            country: 'France',
            physics: '22',
            chemistry: '27',
            maths: '30',
            computer: '29'
        }
    ];

    constructor(private form:FormBuilder){
        this.filter = this.form.control("",{ nonNullable: true})
    }
}
