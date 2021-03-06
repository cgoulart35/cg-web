import { TestBed, async, ComponentFixture } from "@angular/core/testing"
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core"
import { By } from "@angular/platform-browser";
import { AuthService } from "../../user/auth.service"
import { VoterService } from "./voter.service"
import { SessionListComponent } from "./session-list.component"
import { DurationPipe } from "../shared"
//import { UpvoteComponent } from "./upvote.component"
//import { CollapsibleWellComponent } from "src/app/common"

describe('SessionListComponent', () => {
    let fixture: ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        debugEl: DebugElement,
        element: HTMLElement

    beforeEach(async(() => {
        let mockAuthService = {
            isAuthenticated: () => true,
            currentUser: { userName: 'Chris'}
        }
        let mockVoterService = {
            userHasVoted: () => true
        }

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent,
                DurationPipe,
                //UpvoteComponent,
                //CollapsibleWellComponent
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService }
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        })
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent)
        component = fixture.componentInstance
        debugEl = fixture.debugElement
        element = fixture.nativeElement
    })

    describe('initial display', () => {
        it('should have the correct session title', () => {
            component.sessions = [{ id: 3, name: 'Session 1', presenter: 'chris', duration: 1, level: 'beginner', abstract: 'abstract', voters: ['jon', 'chris']}]
            component.filterBy = 'all'
            component.sortBy = 'name'
            component.eventId = 4

            component.ngOnChanges()
            fixture.detectChanges()

            //expect(element.querySelector('[well-title]')?.textContent).toContain('Session 1')
            expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1')
        })
    })
})